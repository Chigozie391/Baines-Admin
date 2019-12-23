import { Component, OnInit, AfterViewInit } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  chart: any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.chart = new Chart('loan', {
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

    this.chart = new Chart('loanFailed', {
      type: 'line',
      data: {
        labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        datasets: [{
          data: [200,180,600,500,800,677,900,500,1200,800,1400,1300],
          borderColor: '#39CDCC',
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

    this.chart = new Chart('lenders', {
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

    this.chart = new Chart('borrowers', {
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


}
