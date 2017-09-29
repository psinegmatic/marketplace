import { Component, OnInit } from '@angular/core';
import {CommonService} from "../../../../services/common.service";
import {ChangeDetectorRef} from '@angular/core';

declare var ymaps: any;
declare var $: any;

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  userCityName: string = 'Москва';
  kladrCity: string;
  kladrCityList: any[];
  private _timeout: any = null;
  constructor(public commonService: CommonService, private ref:ChangeDetectorRef) {

  }

  ngOnInit() {
    this.commonService.getUserCity().subscribe(res => {
      this.userCityName = res.name;
      this.ref.detectChanges();
    });

  }

  getCity_Event(){
    if(this._timeout !== null){
      clearTimeout(this._timeout);
    }
    this._timeout = setTimeout(() =>{
      this.commonService.getKladrCitiesList(this.kladrCity).subscribe(res => {
        this.kladrCityList = res.result;
      });
    }, 1000);
  }

  selectCity(city){
    this.userCityName = city.name;
    this.kladrCityList = [];
    this.kladrCity = '';
    $("#modal-location").modal('hide');
  }
}
