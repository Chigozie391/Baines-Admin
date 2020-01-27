import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import { UsersService } from 'src/app/service/users/users.service';

@Component({
  selector: 'app-users-report',
  templateUrl: './users-report.component.html',
  styleUrls: ['./users-report.component.scss']
})
export class UsersReportComponent implements OnInit {
  chart: any;
  stats: any;

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.usersStats();
  }

  usersStats() {
    this.userService.getUsersStats().subscribe((res: any) => {
      this.stats = res.data;
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
