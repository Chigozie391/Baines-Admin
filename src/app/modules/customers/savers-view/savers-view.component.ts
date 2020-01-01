import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users/users.service';
import { Constant } from 'src/app/utils/constant';
import { Router, ActivatedRoute } from '@angular/router';
import { SaversService } from 'src/app/service/savers/savers.service';

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


  constructor(private userService: UsersService,
      private route: ActivatedRoute,
      private saverService: SaversService,
      ) { }

  getAllInfo(){

    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
    });

    this.userService.getUser(this.id).subscribe((res: any) => {
      if(res.status === Constant.SUCCESS) {
        console.log(res);
        this.saver = res.data.user;
        // this.moreProfile = res.data.loan_profile;
      }
    });

    this.saverService.getUserSavings(this.id).subscribe((res: any) => {
      if(res.status === Constant.SUCCESS) {
        this.userSavings = res.data.plans;
        this.totalSavings = res.data.total_balance;
        console.log(res);
      }
    });

  }

  ngOnInit() {
    this.getAllInfo();
  }

}
