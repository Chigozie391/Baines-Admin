import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/service/auth/auth.service';
import { AccountModel } from './account.model';
import { Constant } from 'src/app/utils/constant';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  providers: [NgbModalConfig, NgbModal]

})
export class AccountComponent implements OnInit {

  email: string;
  account_name: string;
  pwd = new AccountModel();
  msg: any;

  constructor(config: NgbModalConfig,
     private modalService: NgbModal,
     private authService: AuthService) {
    config.backdrop = 'static';
    config.keyboard = false;
   }

   open(content) {
    this.modalService.open(content);
  }
  
  ngOnInit() {
    this.userProfile();
  }

  userProfile(){
    this.account_name = this.authService.user.full_name;
    this.email = this.authService.user.email;
  }

  changePwd(){
    this.msg = "Please wait...";
    this.authService.changePassword(this.pwd).subscribe((res: any) => {
      if(res.status === Constant.SUCCESS) {
        this.msg = res.message;
      }
    }, (err) => {
      if(err.status !== 200){
        this.msg = err.error.message;
      }
    });
  }
}
