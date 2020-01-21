import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/service/team/team.service';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  members: any;

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

}
