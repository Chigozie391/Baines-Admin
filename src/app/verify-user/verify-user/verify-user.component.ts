import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../service/team/team.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Constant } from '../../utils/constant';
import { Path } from '../../utils/path';
import { VerifyUserModel } from '../verify-user.model';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-verify-user',
  templateUrl: './verify-user.component.html',
  styleUrls: ['./verify-user.component.scss']
})
export class VerifyUserComponent implements OnInit {

  orderObj: any;
  email: string;
  verificationDetails = new VerifyUserModel;
  token: string;
  msg: string;

  constructor(private teamService: TeamService,
              private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
    this.getCredentials();
  }

  verify(){
    const data = {
      "full_name": this.verificationDetails.name,
      "phone_number": this.verificationDetails.mobile,
      "password": this.verificationDetails.password
    };
    this.msg = 'Updating Account';
    this.teamService.updateProfile(this.token, data).subscribe((res: any) => {
      if (res.status === Constant.SUCCESS) {
        this.msg = res.message;
        this.authService.token = this.token;
        this.authService.user = undefined;
        this.authService.profile_token = undefined;
        this.router.navigate([Path.DASHBOARD]);
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
      this.token = this.orderObj.params.token;
      this.email = this.orderObj.params.email;
    });
  }

  onClosed() {
    this.msg = '';
  }
}
