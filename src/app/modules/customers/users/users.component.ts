import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users/users.service';
import { Constant } from 'src/app/utils/constant';
import { AuthService } from 'src/app/service/auth/auth.service';
import { FirstNamePipe } from 'src/app/filterPipes/byFirstname/first-name.pipe';
import { LastNamePipe } from 'src/app/filterPipes/byLastname/last-name.pipe';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [FirstNamePipe, LastNamePipe]
})
export class UsersComponent implements OnInit {

  user: any;
  stats: any;
  id: any;
  msg: any;
  term: String;

  title:String;
  names:any;
  config: any;
  dataSet = [];

  constructor(private userService: UsersService,
              private authService: AuthService) { 

              }

  ngOnInit() {
    this.users();
    this.usersStats();
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

  users() {
    this.userService.getAllUsers().subscribe((res: any) => {
      if(res.status === Constant.SUCCESS) {
        // this.user = res.data;
        for(let i = 0; i < res.data.length; i++){
          const data = {
            'id' : res.data[i].id,
            'client_id' : res.data[i].client_id,
            'full_name' : `${res.data[i].first_name} ${res.data[i].last_name}`,
            'phone_number' : res.data[i].phone_number,
            'email' : res.data[i].email,
            'activated' : res.data[i].activated,
            'created_on' : res.data[i].created_on
          }
          this.user = this.dataSet.push(data);
        }
      }
    }, (err) => {
      if (err.status === 401) {
        this.authService.logout();
      }
    });
  }

  usersStats() {
    this.userService.getUsersStats().subscribe((res: any) => {
      this.stats = res.data;
    });
  }

  activate(id) {
    this.msg = 'Activating...'
    this.userService.activateUser(id).subscribe((res: any) => {
      if(res.status === Constant.SUCCESS) {
        this.msg = res.message;
        this.users();
        this.usersStats();
        console.log(this.msg);
      }
    }, (err) => {
      if (err.status === 409) {
        this.msg = err.error.message;
        console.log(this.msg);
      }
    });
  }

  deactivate(id) {
    this.msg = 'Deactivating...'
    this.userService.deactivateUser(id).subscribe((res: any) => {
      if(res.status === Constant.SUCCESS) {
        this.msg = res.message;
        this.users();
        this.usersStats();
        console.log(this.msg);
      }
    }, (err) => {
      if (err.status === 409) {
        this.msg = err.error.message;
        console.log(this.msg);
      }
    });
  }

  onClosed() {
    this.msg = '';
  }

}
