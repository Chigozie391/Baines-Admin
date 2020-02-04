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
  savingsByMonthMonth = [];
  savingsByMonthRunning = [];
  savingsByMonthMatured = [];
  loansByMonthMonth = [];
  loansByMonthRunning = [];
  loansByMonthSettled = [];
        

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
    this.loansByMonthGraphStat();
    this.savingsByMonthGraphStat();
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

  loansByMonthGraphStat(){
    this.reportService.loansByMonthGraph().subscribe((res: any) => {
      if(res.status === Constant.SUCCESS){
        for(let i = 0; i < res.data.length; i++){
          this.loansByMonthMonth.push(res.data[i].month);
          this.loansByMonthRunning.push(res.data[i].running ? res.data[i].running : 0);
          this.loansByMonthSettled.push(res.data[i].settled ? res.data[i].settled : 0);
        }
        this.loanByMonthGraph();
      }
    });
  }

  savingsGraphStat(){
    this.reportService.savingsByMonthGraph().subscribe((res: any) => {
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

  savingsByMonthGraphStat(){
    this.reportService.savingsByMonthGraph().subscribe((res: any) => {
      if(res.status === Constant.SUCCESS){
        for(let i = 0; i < res.data.length; i++){
          this.savingsByMonthMonth.push(res.data[i].month);
          this.savingsByMonthRunning.push(res.data[i].running ? res.data[i].running : 0);
          this.savingsByMonthMatured.push(res.data[i].matured ? res.data[i].matured : 0);
        }
        this.savingsByMonthGraph();
      }
    });
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

    loanByMonthGraph(){
      this.borrowersChart = new Chart('loan-by-month', {
        type: 'bar',
        data: {
          labels: this.loansByMonthMonth,
          datasets:  [{
            data: this.loansByMonthRunning,
            backgroundColor: '#213F7D',
            label: 'Running'
          },{
            data: this.loansByMonthSettled,
            backgroundColor: '#EA3869',
            label: 'Settled'
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


    savingsByMonthGraph(){
      this.saversChart = new Chart('savings-by-month', {
        type: 'bar',
        data: {
          labels: this.savingsByMonthMonth,
          datasets:  [{
            data: this.savingsByMonthRunning,
            backgroundColor: '#39CDCC',
            label: 'Running'
          },{
            data: this.savingsByMonthMatured,
            backgroundColor: '#EA3869',
            label: 'Matured'
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
