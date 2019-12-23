import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  providers: [NgbModalConfig, NgbModal]

})
export class AccountComponent implements OnInit {


  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
   }

   open(content) {
    this.modalService.open(content);
  }
  
  ngOnInit() {
  }

}
