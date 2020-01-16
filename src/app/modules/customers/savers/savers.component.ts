import { Component, OnInit } from '@angular/core';
import { SaversService } from 'src/app/service/savers/savers.service';
import { Constant } from 'src/app/utils/constant';
import { UsersService } from 'src/app/service/users/users.service';
import { LastNamePipe } from 'src/app/filterPipes/byLastname/last-name.pipe';

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

  constructor(private saversService: SaversService,
              private userService: UsersService) { }

  ngOnInit() {
    this.allSavers();
  }

  allSavers() {
    this.loading = true;
    this.saversService.getAllSavers().subscribe((res: any) => {
      this.loading = false;
      if (res.status === Constant.SUCCESS) {
        this.savers = res.data;
      }
      else{

      }
    }, (err) => {
      this.loading = false;
      console.log(err);
    })
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
