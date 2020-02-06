import { Component, OnInit } from '@angular/core';
import { AuditService } from 'src/app/service/audits/audit.service';
import { Constant } from 'src/app/utils/constant';
import { InnerLastNamePipe } from 'src/app/filterPipes/byLastname/inner-last-name.pipe';
import { AuthService } from 'src/app/service/auth/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.scss'],
  providers: [InnerLastNamePipe]
})
export class AuditComponent implements OnInit {

  logs: any;
  pageActual : number = 1;
  config: any;
  pages = [];
  page_id: string = '0';
  pager = {};
  pageOfItems = [];
  p: any;
  currentPage:Number;
  totalPages: any;

  constructor(private auditService: AuditService,
    private authService: AuthService,
    private route: ActivatedRoute) { }

  pageChanged(event){
    this.config.currentPage = event;
  }

  ngOnInit() {
    this.route.queryParams.subscribe(x => {
      this.auditLogs(x.page || 0);
      this.currentPage = parseInt(x.page, 10);
    });
    console.log(this.currentPage);
    // this.auditLogs(this.page_id);
  }

  auditLogs(page_id){
    this.auditService.getAuditLogs(page_id).subscribe((res: any) => {
      if (res.status === Constant.SUCCESS){
        this.logs = res.data;
        this.totalPages = res.data.page_info.total_pages;
        console.log(res.data);
      }
      if(this.pages.length === 0){
        for(let x = 0; x <= res.data.page_info.total_pages; x++){
          this.pages.push(x + 1);
        }
        this.p = this.pages;
      }
    }, (err) => {
      if(err.status === 401){
        this.authService.logout();
      }
    });
  }

}
