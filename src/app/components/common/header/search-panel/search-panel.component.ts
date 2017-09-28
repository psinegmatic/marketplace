import { Component, OnInit } from '@angular/core';
import { NavigationItem } from '../../../../models/navigation-item';
import { CommonService } from "../../../../services/common.service";

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.css']
})

export class SearchPanelComponent implements OnInit {
  navigationItems: NavigationItem[];

  constructor(public commonService: CommonService) {

  }

  ngOnInit() {
    this.navigationItems = this.commonService.getNavigationItem();
  }

}
