import { Component, OnInit, AfterViewInit } from '@angular/core';
import {Chart} from 'chart.js';
import { ReportService } from 'src/app/service/reports/report.service';
import { Constant } from 'src/app/utils/constant';
import { AuthService } from 'src/app/service/auth/auth.service';
import { UsersService } from 'src/app/service/users/users.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  chart: any;
  desc: any;
  loanChart: any;
  stats: any;
  loanMonth = [];
  loanTotal = [];
  loanActive = [];

  constructor(
    private reportService: ReportService, 
    private authService: AuthService,
    private userService: UsersService) { }

  ngOnInit() {
    this.allReportDescriptions();
    this.loanGraphStat();
    this.usersStats();
  }

  allReportDescriptions(){
    this.reportService.reportDescription().subscribe((res: any) => {
      if(res.status === Constant.SUCCESS){
        this.desc = res.data;
      }
    }, (err) => {
      if(err.status === 401){
        this.authService.logout();
      }
    });
  }

  usersStats() {
    this.userService.getUsersStats().subscribe((res: any) => {
      if(res.status === Constant.SUCCESS){
        this.stats = res.data;
      }
    }, (err) => {
      if(err.status === 401){
        this.authService.logout();
      }
    });
  }

  loanGraphStat(){
    this.reportService.loansGraph().subscribe((res: any) => {
      if(res.status === Constant.SUCCESS){
        for(let i = 0; i < res.data.length; i++){
          this.loanMonth.push(res.data[i].month);
          this.loanTotal.push(res.data[i].total ? res.data[i].total : 0);
          this.loanActive.push(res.data[i].active ? res.data[i].active : 0);
        }
        this.loanGraph();
      }
    });
  }

  loanGraph(){
    this.loanChart = new Chart('loan', {
      type: 'line',
      data: {
        labels: this.loanMonth,
        datasets: [{
          data: this.loanTotal,
          borderColor: '#39CDCC',
          backgroundColor: 'transparent',
          label: 'Total'
        },{
          data: this.loanActive,
          borderColor: '#EA3869',
          backgroundColor: 'transparent',
          label: 'Active'
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }],
          xAxes: [{
            barPercentage: 1,
            barThickness: 20,
            maxBarThickness: 30,
            gridLines: {
              display: false
            }
          }]
        }
      }
    });
  }

  // ngAfterViewInit() {

  //   this.chart = new Chart('loanFailed', {
  //     type: 'line',
  //     data: {
  //       labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
  //       datasets: [{
  //         data: [200,180,600,500,800,677,900,500,1200,800,1400,1300],
  //         borderColor: '#39CDCC',
  //         backgroundColor: 'transparent',
  //         label: 'Total'
  //       },{
  //         data: [400,300,400,600,900,700,1000,900,1200,700,1300,1200],
  //         borderColor: '#EA3869',
  //         backgroundColor: 'transparent',
  //         label: 'Active'
  //       }]
  //     },
  //     options: {
  //       scales: {
  //         yAxes: [{
  //           ticks: {
  //             beginAtZero: true
  //           }
  //         }],
  //         xAxes: [{
  //           barPercentage: 1,
  //           barThickness: 20,
  //           maxBarThickness: 30,
  //           gridLines: {
  //             display: false
  //           }
  //         }]
  //       }
  //     }
  //   });
    
  // }

}
