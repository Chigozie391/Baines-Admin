import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { InviteModel } from './invite.model';
import { TeamService } from 'src/app/service/team/team.service';
import { Constant } from 'src/app/utils/constant';
import { AuthService } from 'src/app/service/auth/auth.service';


@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {

  isLinear = false;
  invitation = new InviteModel;
  roles: any;
  firstFormGroup: FormGroup;
  msg: string;


  constructor(private _formBuilder: FormBuilder,
              private teamService: TeamService,
              private authService: AuthService) {  }


  @Input()
  checked: boolean;

  ngOnInit() {
    this.getRoles();
  }

  getRoles(){
    this.teamService.getTeamRoles().subscribe((res: any) => {
      if (res.status === Constant.SUCCESS){
        this.roles = res.data;
      }
    }, (err) => {
      if (err.status === 401) {
        this.authService.logout();
      }
    });
  }

  sendInvite(){
    const data = {
      "email" : this.invitation.email,
      "role_id" : this.invitation.role 
    };
    this.teamService.sendInvite(data).subscribe((res: any) => {
      if (res.status === Constant.SUCCESS){
        this.msg = res.message;
      }
    }, (err) => {
      if(err.status === 401){
        // this.msg = `${err.error.message} - Please logout to begin a new session`;
        this.authService.logout();
      }

      if(err.status !== 200){
        this.msg = err.error.message;
      }
    });

  }

  onClosed() {
    this.msg = '';
  }

}
