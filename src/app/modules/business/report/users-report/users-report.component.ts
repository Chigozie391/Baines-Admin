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

  constructor(
    private userService: UsersService,
    private reportService: ReportService,
    private authService: AuthService) { }

  ngOnInit() {
    this.usersStats();
    this.userOnboard();
  }

  usersStats() {
    this.userService.getUsersStats().subscribe((res: any) => {
      this.stats = res.data;
    });
  }

  userOnboard(){
    this.reportService.userOnboarding().subscribe((res:any) => {
      console.log(res);
      if(res.status === Constant.SUCCESS){
        this.users = res.data;
      }
    }, (err) => {
      if(err.status === 401){
        this.authService.logout();
      }
    });
  }

  ngAfterViewInit() {
    this.chart = new Chart('loanFailed', {
      type: 'line',
      data: {
        labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        datasets: [{
          data: [200,180,600,500,800,677,900,500,1200,800,1400,1300],
          borderColor: '#213F7D',
          backgroundColor: 'transparent',
          label: 'Total'
        },{
          data: [400,300,400,600,900,700,1000,900,1200,700,1300,1200],
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
