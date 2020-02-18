import { Component, OnInit } from '@angular/core';
import { Reset } from './reset.module';
import { TeamService } from '../service/team/team.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Constant } from '../utils/constant';
import { Path } from '../utils/path';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  orderObj: any;
  ResetDetails = new Reset;
  msg: String;
  token: string;
  email: String;

  constructor(private teamService: TeamService,
    private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit() {
    this.getCredentials();
    console.log(this.email);
  }

  reset(){
    const data = {
      "email": this.email,
      "new_password": this.ResetDetails.password
    };
    this.msg = 'Reseting.....';
    this.teamService.resetPassword(this.token, data).subscribe((res: any) => {
      if (res.status === Constant.SUCCESS) {
        this.msg = res.message;
        this.router.navigate([Path.LOGIN]);
      }
    }, (err) => {
      if(err.status !== 200){
        this.msg = err.error.message;
      }
    });

  }

  getCredentials(){
    this.route.queryParamMap.subscribe(params => {
      this.orderObj = {...params.keys, ...params};
      console.log(this.orderObj);
      this.token = this.orderObj.params.token;
      this.email = this.orderObj.params.email;
      // console.log(this.email);
    });
  }

  onClosed() {
    this.msg = '';
  }

}
