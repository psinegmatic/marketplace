import { Component, OnInit } from '@angular/core';
import { CommonService} from '../../../../services/common.service';
import {timeout} from "rxjs/operator/timeout";
import {KladrCity} from "../../../../models/kladrCity";

@Component({
  selector: 'app-info-block',
  templateUrl: './info-block.component.html',
  styleUrls: ['./info-block.component.css']
})
export class InfoBlockComponent implements OnInit {
  cityName: string = 'моск';
  citiesList: KladrCity[];
  currentCity: string;

  constructor(public commonService: CommonService) { }

  ngOnInit() {
  }

  findCity() {

  }

}
