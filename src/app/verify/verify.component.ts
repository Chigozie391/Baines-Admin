import { Component, OnInit } from '@angular/core';
import { TeamService } from '../service/team/team.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VerifyModel } from './verify.model';
import { Constant } from '../utils/constant';
import { Path } from '../utils/path';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {

  orderObj: any;
  email: string;
  verificationDetails = new VerifyModel;
  token: string;
  msg: string;

  constructor(private teamService: TeamService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.getCredentials();
  }

  verify(){
    const data = {
      "full_name": this.verificationDetails.name,
      "phone_number": this.verificationDetails.mobile,
      "password": this.verificationDetails.password
    };
    // console.table(this.token, data);

    this.teamService.updateProfile(this.token, data).subscribe((res: any)=> {
      console.log(res);
    });

    // this.teamService.updateProfile(this.token, data).subscribe((res: any) => {
    //   console.log(res);
    //   if (res.status === Constant.SUCCESS) {
    //     this.msg = res.message;
    //     this.router.navigate([Path.DASHBOARD]);
    //   }
    // }, (err) => {
    //   if(err.status !== 200){
    //     this.msg = err.error.message;
    //     console.log(err);
    //   }
    //   console.log(err);
    // });


  }

  getCredentials(){
    this.route.queryParamMap.subscribe(params => {
      this.orderObj = {...params.keys, ...params};
      console.log(this.orderObj);
      this.token = this.orderObj.params.token;
      this.email = this.orderObj.params.email;
    });
  }


}
