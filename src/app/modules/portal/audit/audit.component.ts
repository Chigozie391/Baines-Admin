import { Component, OnInit } from '@angular/core';
import { AuditService } from 'src/app/service/audits/audit.service';
import { Constant } from 'src/app/utils/constant';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.scss']
})
export class AuditComponent implements OnInit {

  logs: any;
  pageActual : number = 1;
  config: any;

  constructor(private auditService: AuditService) { }

  pageChanged(event){
    this.config.currentPage = event;
  }

  ngOnInit() {
    this.auditLogs();
  }

  auditLogs(){
    this.auditService.getAuditLogs().subscribe((res: any) => {
      if (res.status === Constant.SUCCESS){
        console.log(res.data);
        this.logs = res.data;
      }
    });
  }

}
