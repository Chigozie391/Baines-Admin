import { Component, OnInit } from '@angular/core';
import { SavingsService } from 'src/app/service/savings/savings.service';
import { Constant } from 'src/app/utils/constant';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.scss']
})
export class SavingsComponent implements OnInit {

  savings: any;
  stat: any;

  constructor(
    private savingsService: SavingsService,
    private authService: AuthService
    ) { }

  ngOnInit() {
    this.allSavings();
    this.savingsStat();
  }

  allSavings() {
    this.savingsService.getAllSavings().subscribe((res: any) => {
      this.savings = res.data;
    }, (err) => {
      if(err.status === 401){
        // this.msg = `${err.error.message} - Please logout to begin a new session`;
        this.authService.logout();
      }
    });
  }

  savingsStat(){
    this.savingsService.getSavingStats().subscribe((res: any) => {
      if(res.status === Constant.SUCCESS){
        this.stat = res.data;
      }
    });
  }

}
