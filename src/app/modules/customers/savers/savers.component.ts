import { Component, OnInit } from '@angular/core';
import { SaversService } from 'src/app/service/savers/savers.service';
import { Constant } from 'src/app/utils/constant';

@Component({
  selector: 'app-savers',
  templateUrl: './savers.component.html',
  styleUrls: ['./savers.component.scss']
})
export class SaversComponent implements OnInit {

  loading: boolean;
  savers: any;

  constructor(private saversService: SaversService) { }

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

}
