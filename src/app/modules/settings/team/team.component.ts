import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/service/team/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  members: any;

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.teamMembers();
  }

  teamMembers(){
    this.teamService.getTeamMembers().subscribe((res: any) => {
      this.members = res.data;
    })
  }

}
