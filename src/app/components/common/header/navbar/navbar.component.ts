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
  hiddenNavigationItems: any[] = [];
  constructor(public commonService: CommonService) {

  }

  ngOnInit() {
    this.navigationItems = this.commonService.getNavigationItem();
  }

  onResize(event, item, itemRectangle, menuRectangle) {
    if(item.visible){
      if (itemRectangle.right > menuRectangle.right) {
        item.visible = false;
        this.hiddenNavigationItems.push({
          item: item,
          rightPosition: itemRectangle.right
        });
      }
    } else {
      for (let i = this.hiddenNavigationItems.length - 1; i >= 0; i--){
        if(this.hiddenNavigationItems[i].item === item && this.hiddenNavigationItems[i].rightPosition < menuRectangle.right){
          item.visible = true;
          this.hiddenNavigationItems.splice(i, 1);
        }
      }
    }
  }
}
