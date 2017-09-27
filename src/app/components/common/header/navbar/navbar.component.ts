import { Component, OnInit } from '@angular/core';
import { NavigationItem } from '../../../../models/navigation-item';
import { CommonService } from "../../../../services/common.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navigationItems: NavigationItem[];
  constructor(public commonService: CommonService) { }

  ngOnInit() {
    this.navigationItems = this.commonService.getNavigationItem();
  }

}
