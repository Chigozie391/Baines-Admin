import { Component, OnInit, AfterViewInit } from '@angular/core';
import {Chart} from 'chart.js';
import { LoansService } from 'src/app/service/loans/loans.service';
import { Constant } from 'src/app/utils/constant';
import { AuthService } from 'src/app/service/auth/auth.service';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { ReportService } from 'src/app/service/reports/report.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  loanChart: any;
  savingsChart : any;
  borrowersChart: any;
  saversChart : any;
  stat: any;
  wallet: string;
  loans: any;
  loanMonth = [];
  loanTotal = [];
  loanActive = [];
  savingsMonth = [];
  savingsTotal = [];
  savingsActive = [];
        

  constructor(private loansService: LoansService,
    private reportService: ReportService,
     private authService: AuthService) { }

  ngOnInit() {
    this.loansStat();
    this.walletBalance();
    this.allGraphs();
  }

  allGraphs(){
    this.loanGraphStat();
    this.savingsGraphStat();
    this.borrowersGraphStat();
    this.saversGraphStat();
  }

  loansStat(){
    this.loansService.getLoanStats().subscribe((res: any) => {
      if(res.status === Constant.SUCCESS){
        this.stat = res.data;
      }
    }, (err) => {
      if(err.status === 401){
        this.authService.logout();
      }
    });
  }

  walletBalance(){
    this.loansService.getWalletBalance().subscribe((res: any) => {
      if(res.status === Constant.SUCCESS){
        this.wallet = res.data.Data;
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

  savingsGraphStat(){
    this.reportService.savingsGraph().subscribe((res: any) => {
      if(res.status === Constant.SUCCESS){
        for(let i = 0; i < res.data.length; i++){
          this.savingsMonth.push(res.data[i].month);
          this.savingsTotal.push(res.data[i].total ? res.data[i].total : 0);
          this.savingsActive.push(res.data[i].active ? res.data[i].active : 0);
        }
        this.savingsGraph();
      }
    });
  }

  borrowersGraphStat(){
    this.borrowersGraph();
  }

  saversGraphStat(){
    this.saversGraph();
  }

  // ngAfterViewInit() {
    loanGraph(){
      this.loanChart = new Chart('loan', {
        type: 'line',
        data: {
          labels: this.loanMonth,
          datasets: [{
            data: this.loanTotal,
            borderColor: '#213F7D',
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

    savingsGraph(){
      this.savingsChart = new Chart('savings', {
        type: 'line',
        data: {
          labels: this.savingsMonth,
          datasets: [{
            data: this.savingsTotal,
            borderColor: '#39CDCC',
            backgroundColor: 'transparent',
            label: 'Total'
          },{
            data: this.savingsActive,
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

    borrowersGraph(){
      this.borrowersChart = new Chart('borrowers', {
        type: 'bar',
        data: {
          labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
          datasets:  [{
            data: [200,180,600,500,800,677,900,500,1200,800,1400,1300],
            backgroundColor: '#213F7D',
            label: 'Total'
          },{
            data: [400,300,400,600,900,700,1000,900,1200,700,1300,1200],
            backgroundColor: '#EA3869',
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
              barThickness: 10,
              maxBarThickness: 30,
              gridLines: {
                offsetGridLines: false,
                display: false
              }
            }]
          }
        }
      });
    }


    saversGraph(){
      this.saversChart = new Chart('savers', {
        type: 'bar',
        data: {
          labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
          datasets:  [{
            data: [200,180,600,500,800,677,900,500,1200,800,1400,1300],
            backgroundColor: '#39CDCC',
            label: 'Total'
          },{
            data: [400,300,400,600,900,700,1000,900,1200,700,1300,1200],
            backgroundColor: '#EA3869',
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
              barThickness: 10,
              maxBarThickness: 30,
              gridLines: {
                offsetGridLines: false,
                display: false
              }
            }]
          }
        }
      });
    }

  // }


}
