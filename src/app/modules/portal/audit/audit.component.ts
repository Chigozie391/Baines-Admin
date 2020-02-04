import { Component, OnInit } from '@angular/core';
import { AuditService } from 'src/app/service/audits/audit.service';
import { Constant } from 'src/app/utils/constant';
import { InnerLastNamePipe } from 'src/app/filterPipes/byLastname/inner-last-name.pipe';
import { AuthService } from 'src/app/service/auth/auth.service';
import { PaginationService } from 'src/app/service/pagination/pagination.service';
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

  constructor(private auditService: AuditService,
    private authService: AuthService) { }

  pageChanged(event){
    this.config.currentPage = event;
  }

  ngOnInit() {
    this.auditLogs(this.page_id);
  }

  auditLogs(page_id){
    this.auditService.getAuditLogs(page_id).subscribe((res: any) => {
      if (res.status === Constant.SUCCESS){
        this.logs = res.data.logs;
      }
      for(let x = 0; x <= res.data.page_info.total_pages; x++){
        this.pages.push(x);
      }
    }, (err) => {
      if(err.status === 401){
        this.authService.logout();
      }
    });
  }

}
