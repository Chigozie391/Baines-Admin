import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth.service';
import { Constant } from 'src/app/utils/constant';
import { Router } from '@angular/router';
import { Path } from 'src/app/utils/path';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.logoutRoute().subscribe((res: any) => {
      if(res.status === Constant.SUCCESS){
        localStorage.clear();
        this.router.navigate([Path.LOGIN])
        return;
      }    
    });
  }

}
