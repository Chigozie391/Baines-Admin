import { Component, OnInit } from '@angular/core';
import { AuditService } from 'src/app/service/audits/audit.service';
import { Constant } from 'src/app/utils/constant';
import { InnerLastNamePipe } from 'src/app/filterPipes/byLastname/inner-last-name.pipe';
import { AuthService } from 'src/app/service/auth/auth.service';

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

  constructor(private auditService: AuditService,
    private authService: AuthService) { }

  pageChanged(event){
    this.config.currentPage = event;
  }

  ngOnInit() {
    this.auditLogs();
  }

  auditLogs(){
    this.auditService.getAuditLogs().subscribe((res: any) => {
      if (res.status === Constant.SUCCESS){
        this.logs = res.data.logs;
      }
    }, (err) => {
      if(err.status === 401){
        this.authService.logout();
      }
    });
  }

}
