import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/service/team/team.service';
import { AuthService } from 'src/app/service/auth/auth.service';
import { Constant } from 'src/app/utils/constant';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  members: any;
  msg: String;

  constructor(private teamService: TeamService,
    private authService: AuthService) { }

  ngOnInit() {
    this.teamMembers();
  }

  teamMembers(){
    this.teamService.getTeamMembers().subscribe((res: any) => {
      this.members = res.data;
    }, (err) => {
      if (err.status === 401) {
        this.authService.logout();
      }
    });
  }

  activate(id){
    const data = {"blacklist": '0'};
    this.msg = 'Activating...'
    this.teamService.updateAdminStatus(id, data).subscribe((res: any) => {
      if(res.status === Constant.SUCCESS) {
        this.msg = res.message;
        this.teamMembers();
      }
    }, (err) => {
      if (err.status !== 401) {
        this.msg = err.error.message;
      }
    });
  }


  deactivate(id) {
    const data = {"blacklist": '1'};
    this.msg = 'Deactivating...'
    this.teamService.updateAdminStatus(id, data).subscribe((res: any) => {
      if(res.status === Constant.SUCCESS) {
        this.msg = res.message;
        this.teamMembers();
      }
    }, (err) => {
      if (err.status !== 401) {
        this.msg = err.error.message;
      }
    });
  }

  onClosed() {
    this.msg = '';
  }

}
