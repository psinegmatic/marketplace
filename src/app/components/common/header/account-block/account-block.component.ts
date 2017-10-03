import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NgbModal, NgbTabsetConfig, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-account-block',
  templateUrl: './account-block.component.html',
  styleUrls: ['./account-block.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AccountBlockComponent implements OnInit {

  constructor(private modalService: NgbModal, config: NgbTabsetConfig) {
    config.justify = 'justified';
  }

  open(content) {
    this.modalService.open(content, { windowClass: 'account-modal' });
  }

  ngOnInit() {
  }

}
