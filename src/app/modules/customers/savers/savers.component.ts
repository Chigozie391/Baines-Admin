import { Component, OnInit } from '@angular/core';
import { SaversService } from 'src/app/service/savers/savers.service';
import { Constant } from 'src/app/utils/constant';
import { UsersService } from 'src/app/service/users/users.service';
import { LastNamePipe } from 'src/app/filterPipes/byLastname/last-name.pipe';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-savers',
  templateUrl: './savers.component.html',
  styleUrls: ['./savers.component.scss'],
  providers: [LastNamePipe]
})
export class SaversComponent implements OnInit {

  loading: boolean;
  savers: any;
  msg: any;
  config: any;
  dataSet = [];

  constructor(private saversService: SaversService,
              private userService: UsersService,
              private authService: AuthService) { }

  ngOnInit() {
    this.allSavers();
  }

  allSavers() {
    this.loading = true;
    this.saversService.getAllSavers().subscribe((res: any) => {
      this.loading = false;
      if (res.status === Constant.SUCCESS) {
        // this.savers = res.data;
        console.log(res);
        for(let i = 0; i < res.data.length; i++){
          const data = {
            'user_id' : res.data[i].user_id,
            'full_name' : `${res.data[i].first_name} ${res.data[i].last_name}`,
            'activated' : res.data[i].activated,
            'created_on' : res.data[i].created_on
          }
          this.savers = this.dataSet.push(data);
        }
      }
    }, (err) => {
      if(err.status === 401){
        // this.msg = `${err.error.message} - Please logout to begin a new session`;
        this.authService.logout();
      }
    });
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

  activate(id) {
    this.msg = 'Activating...'
    this.userService.activateUser(id).subscribe((res: any) => {
      if(res.status === Constant.SUCCESS) {
        this.msg = res.message;
        this.allSavers();
      }
    }, (err) => {
      if (err.status === 409) {
        this.msg = err.error.message;
      }
    });
  }

  deactivate(id) {
    this.msg = 'Deactivating...'
    this.userService.deactivateUser(id).subscribe((res: any) => {
      if(res.status === Constant.SUCCESS) {
        this.msg = res.message;
        this.allSavers();
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
