import { Component, OnInit } from '@angular/core';
import { AuditService } from 'src/app/service/audits/audit.service';
import { Constant } from 'src/app/utils/constant';
import { InnerLastNamePipe } from 'src/app/filterPipes/byLastname/inner-last-name.pipe';
import { AuthService } from 'src/app/service/auth/auth.service';
import { PaginationModel } from 'src/app/model/pagination.model';
import { PaginationService } from 'src/app/service/pagination/pagination.service';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.scss'],
  providers: [InnerLastNamePipe]
})
export class AuditComponent implements OnInit {
  currentPage: any = 1;
  paginationModel = new PaginationModel();
  pageSettings: any;

  logs: any;
  pageActual: number = 1;
  config: any;
  pager: any = {};

  constructor(
    private auditService: AuditService,
    private authService: AuthService,
    private paginationService: PaginationService
  ) {}

  pageChanged(event) {
    this.config.currentPage = event;
  }

  ngOnInit() {
    this.auditLogs(this.currentPage);
  }

  auditLogs = (currentPage?) => {
    if (currentPage) this.currentPage = currentPage;
    this.paginationModel.page = this.currentPage;
    this.auditService.getAuditLogs(this.paginationModel).subscribe(
      (res: any) => {
        if (res.status === Constant.SUCCESS) {
          this.logs = res.data;
          this.pageSettings = res.data.page_info;
          this.pager = this.paginationService.setPage(
            this.pageSettings.total_pages,
            this.pageSettings.page,
            this.pageSettings.limit
          );
          console.log(this.pager);
        }
      },
      err => {
        if (err.status === 401) {
          this.authService.logout();
        }
      }
    );
  };

  setNewPage(page) {
    this.paginationService.setNewCurrentPage(page, this.currentPage, this.auditLogs);
  }
}

