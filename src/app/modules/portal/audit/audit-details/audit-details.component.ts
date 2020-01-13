import { Component, OnInit } from '@angular/core';
import { AuditService } from 'src/app/service/audits/audit.service';
import { ActivatedRoute } from '@angular/router';
import { Constant } from 'src/app/utils/constant';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-audit-details',
  templateUrl: './audit-details.component.html',
  styleUrls: ['./audit-details.component.scss']
})
export class AuditDetailsComponent implements OnInit {

  audit_id: any;
  audit_details: any;

  constructor(private auditService: AuditService,
    private route: ActivatedRoute,
    private authService: AuthService) { 
      this.route.paramMap.subscribe(params => {
        this.audit_id = params.get("id");
      });
    }

  ngOnInit() {
    this.getDetails();
  }

  getDetails() {
    this.auditService.getAuditDetails(this.audit_id).subscribe((res: any) => {
      if (res.status === Constant.SUCCESS) {
        this.audit_details = res.data;
      }
    }, (err) => {
      if(err.status === 401){
        // this.msg = `${err.error.message} - Please logout to begin a new session`;
        this.authService.logout();
      }
    })
  }

}
