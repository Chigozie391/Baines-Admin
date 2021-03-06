import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import { UsersService } from 'src/app/service/users/users.service';
import { ReportService } from 'src/app/service/reports/report.service';
import { Constant } from 'src/app/utils/constant';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-users-report',
  templateUrl: './users-report.component.html',
  styleUrls: ['./users-report.component.scss']
})
export class UsersReportComponent implements OnInit {
  chart: any;
  stats: any;
  users: any;
  months = [];
  total = [];
  active = [];
  // loading: Boolean;

  constructor(
    private userService: UsersService,
    private reportService: ReportService,
    private authService: AuthService) { }

  ngOnInit() {
    this.usersGraphStat();
    this.usersStats();
    this.userOnboard();
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

  userOnboard(){
    this.reportService.userOnboarding().subscribe((res:any) => {
      if(res.status === Constant.SUCCESS){
        this.users = res.data;
      }
    }, (err) => {
      if(err.status === 401){
        this.authService.logout();
      }
    });
  }

  usersGraphStat(){
    // this.loading = false;
    this.reportService.userGraph().subscribe((res: any) => {
      if(res.status === Constant.SUCCESS){
        for(let i = 0; i < res.data.length; i++){
          this.months.push(res.data[i].month);
          this.total.push(res.data[i].total ? res.data[i].total : 0);
          this.active.push(res.data[i].active ? res.data[i].active : 0);
        }
        this.Graph();
        // this.loading = true;
      }
    });
  }

  Graph() {
    this.chart = new Chart('users', {
      type: 'line',
      data: {
        // labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        labels: this.months,
        datasets: [{
          data: this.total,
          // data: [200,180,0,500,800,677,900,500,1200,800,1400,1300],
          borderColor: '#213F7D',
          backgroundColor: 'transparent',
          label: 'Total'
        },{
          data: this.active,
          // data: [0,300,400,600,900,700,1000,900,1200,700,1300,1200],
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

}
