import { Component, OnInit, ViewChild  } from '@angular/core';
import {LocationService} from "../../../../services/location.service";
import {ChangeDetectorRef} from '@angular/core';
import {NgbTooltipConfig} from '@ng-bootstrap/ng-bootstrap';

declare var ymaps: any;
declare var $: any;


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
  providers: [NgbTooltipConfig]
})
export class LocationComponent implements OnInit {
  userCityName?: string = 'Москва';
  kladrCity: string;
  kladrCityList: any[];
  private _timeout: any = null;

  @ViewChild("locationTooltip")
  locationTooltip: HTMLElement;

  constructor(public locationService: LocationService, private ref:ChangeDetectorRef, config: NgbTooltipConfig) {
    config.placement = 'bottom';
    config.triggers = 'click';
  }

  ngOnInit() {
    this.userCityName = this.locationService.getSavedLocation();
    if (this.userCityName === null){
      this.locationService.getUserLocation().subscribe(res => {
        debugger;
        this.userCityName = res;
        this.ref.detectChanges();
        //this.locationTooltip.open();
      });
    }

  }

  ngAfterViewInit() {

  }

  getUserLocationFromYandex() {

  }

  getCity_Event(){
    if(this._timeout !== null){
      clearTimeout(this._timeout);
    }
    this._timeout = setTimeout(() =>{
      this.locationService.getKladrCitiesList(this.kladrCity).subscribe(res => {
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

  confirmCity(){

  }
}
