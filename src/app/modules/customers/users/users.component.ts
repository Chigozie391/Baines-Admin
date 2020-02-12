import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users/users.service';
import { Constant } from 'src/app/utils/constant';
import { AuthService } from 'src/app/service/auth/auth.service';
import { FirstNamePipe } from 'src/app/filterPipes/byFirstname/first-name.pipe';
import { LastNamePipe } from 'src/app/filterPipes/byLastname/last-name.pipe';
import { PaginationModel } from 'src/app/model/pagination.model';
import { PaginationService } from 'src/app/service/pagination/pagination.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [FirstNamePipe, LastNamePipe]
})
export class UsersComponent implements OnInit {

  currentPage: any = 1;
  paginationModel = new PaginationModel();
  pageSettings: any;
  pager: any = {};

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
              private authService: AuthService,
              private paginationService: PaginationService) { 

              }

  ngOnInit() {
    this.users(this.currentPage);
    this.usersStats();
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

  users = (currentPage?) => {
    if (currentPage) this.currentPage = currentPage;
    this.paginationModel.page = this.currentPage;
    this.userService.getAllUsers(this.paginationModel).subscribe((res: any) => {
      if(res.status === Constant.SUCCESS) {
        this.dataSet = [];
        for(let i = 0; i < res.data.users.length; i++){
          const data = {
            'id' : res.data.users[i].id,
            'client_id' : res.data.users[i].client_id,
            'full_name' : `${res.data.users[i].first_name} ${res.data.users[i].last_name}`,
            'phone_number' : res.data.users[i].phone_number,
            'email' : res.data.users[i].email,
            'activated' : res.data.users[i].activated,
            'created_on' : res.data.users[i].created_on
          }
          this.user = this.dataSet.push(data);
        }

        this.pageSettings = res.data.page_info;
        this.pager = this.paginationService.setPage(
          this.pageSettings.total_pages,
          this.pageSettings.page,
          this.pageSettings.limit
        );

      }
    }, (err) => {
      if (err.status === 401) {
        this.authService.logout();
      }
    });
  }

  setNewPage(page) {
    this.paginationService.setNewCurrentPage(page, this.currentPage, this.users);
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
      }
    }, (err) => {
      if (err.status !== 401) {
        this.msg = err.error.message;
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
