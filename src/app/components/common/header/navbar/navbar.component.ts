import { Component, OnInit } from '@angular/core';
import { NavigationItem } from '../../../../models/navigation-item';
import { CommonService } from "../../../../services/common.service";
import {isUndefined} from "util";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navigationItems: NavigationItem[];

  constructor(public commonService: CommonService) {

  }

  ngOnInit() {
    this.navigationItems = this.commonService.getNavigationItem();
  }

  onResize(event, item, itemRectangle, menuRectangle) {
    if(item.visible){
      if (itemRectangle.right > menuRectangle.right) {
        item.visible = false;
      }
    } else {
      if (itemRectangle.right < menuRectangle.right) {
        item.visible = true;
      }
    }
  }
}
