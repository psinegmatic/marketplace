import { Component, OnInit, ViewChild, NgZone  } from '@angular/core';
import {LocationService} from "../../../../services/location.service";
import {NgbTooltip, NgbModal, NgbTooltipConfig} from '@ng-bootstrap/ng-bootstrap';

declare var ymaps: any;
declare var $: any;


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
  providers: [NgbTooltipConfig]
})
export class LocationComponent implements OnInit {
  userLocation?: string = 'Москва';
  kladrCity: string;
  kladrCityList: any[];
  private _timeout: any = null;

  @ViewChild("locationTooltip")
  locationTooltip: NgbTooltip;
  @ViewChild("selectLocationWindow")
  selectLocationWindow: NgbModal;

  constructor(public locationService: LocationService, config: NgbTooltipConfig, private _ngZone: NgZone, private modalService: NgbModal) {
    config.placement = 'bottom';
    config.triggers = 'click';
  }

  ngOnInit() {
    //localStorage.removeItem('userLocation');
    this.userLocation = this.locationService.getSavedLocation();
    if (this.userLocation === null){
      this.locationService.getUserLocation().subscribe(res => {
        this.userLocation = res;
        let self = this;
        this._ngZone.run(()=> {
          this.locationTooltip.open();
        });
      });
    }
  }

  confirmUserLocation() {
    this.locationService.setUserLocation(this.userLocation);
    this.locationTooltip.close();
  }
  showSelectUserLocationWindow(modalWindow){
    this.locationTooltip.close();
    this.modalService.open(modalWindow);
  }
  searchUserLocation(queryString: string) {
    this.locationService.searchLocation(queryString).subscribe(res => {
      console.log(res);
    });
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
    this.userLocation = city.name;
    this.kladrCityList = [];
    this.kladrCity = '';
    $("#modal-location").modal('hide');
  }

  closePopup(popup){
    popup.close();
  }

  confirmCity(){

  }
}
