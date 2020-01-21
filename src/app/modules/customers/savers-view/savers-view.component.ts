import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users/users.service';
import { Constant } from 'src/app/utils/constant';
import { Router, ActivatedRoute } from '@angular/router';
import { SaversService } from 'src/app/service/savers/savers.service';
import { BankService } from 'src/app/service/bank/bank.service';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-savers-view',
  templateUrl: './savers-view.component.html',
  styleUrls: ['./savers-view.component.scss']
})
export class SaversViewComponent implements OnInit {

  id: any;
  saver: any;
  userSavings: any;
  totalSavings: any;
  banks: any;
  cards: any;

  constructor(private userService: UsersService,
      private route: ActivatedRoute,
      private saverService: SaversService,
      private bankService: BankService,
      private authService: AuthService
      ) { }

  getAllInfo(){

    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
    });

    this.userService.getUser(this.id).subscribe((res: any) => {
      if(res.status === Constant.SUCCESS) {
        this.saver = res.data.user;
      }
    }, (err) => {
      if(err.status === 401){
        // this.msg = `${err.error.message} - Please logout to begin a new session`;
        this.authService.logout();
      }
    });

    this.saverService.getUserSavings(this.id).subscribe((res: any) => {
      if(res.status === Constant.SUCCESS) {
        this.userSavings = res.data.plans;
        this.totalSavings = res.data.total_balance;
      }
      console.log(res.data);
    });

    this.userService.getUserBankingInfo(this.id).subscribe((res: any) => {
      if(res.status === Constant.SUCCESS) {
        this.banks = res.data.banks;
        this.cards = res.data.cards;

      }
    });


  }

  ngOnInit() {
    this.getAllInfo();
  }

}
