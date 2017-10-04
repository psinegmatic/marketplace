import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Http, Jsonp, Response} from '@angular/http';
import {NavigationItem} from '../models/navigation-item';
import "rxjs/add/operator/catch";

declare var ymaps: any;

@Injectable()
export class LocationService {
  kladrAPIUrl: string = "http://kladr-api.ru/api.php?";
  geocode: Observable<any>;
  userGeocode: any;

  constructor(private jsonp: Jsonp, private  http: Http) {
  }

  getSavedLocation(): string {
    let userLocation: string = null;
    if (localStorage.getItem('userLocation') !== null) {
      userLocation = localStorage.getItem('userLocation');
    }

    return userLocation;
  }

  setUserLocation(location: string) {
    localStorage.setItem('userLocation', location);
  }



  getKladrCitiesList(query): Observable<any> {
    return this.jsonp.get(this.kladrAPIUrl + "query=" + query + "&contentType=city&limit=5&callback=JSONP_CALLBACK")
      .map(function (res) {
        return res.json() || {};
      });
  }

  /*-----------------------------------------*/


  getUserLocation() {
    this.geocode = new Observable(observer => {
      ymaps.ready(function () {
        ymaps.geolocation.get({provider: 'browser', mapStateAutoApply: true})
          .then(function (result) {
            var res = result.geoObjects.get(0).properties.getAll();
              observer.next(result.geoObjects.get(0).getLocalities());
              observer.complete();
              this.userGeocode
            },
            function (res) {
              console.log(res);
            });
      })
    });

    return this.geocode;
  }

  searchLocation(queryString: string){
    this.geocode = new Observable(observer => {
      ymaps.geocode('Россия, ' + queryString, {kind: "locality", json: true}).then(
        function (res) {
          console.log(res);
          let totalReconds = res.metaData.geocoder.results;
          let locationList: string[] = [];
          for( let i = 0; i < totalReconds; i++){
            locationList.push(res.geoObjects.get(i).getLocalities());
          }
          observer.next(locationList);
          observer.complete();
        },
        function (err) {
          console.log(err);
        }
      );

    });
    return this.geocode;
  }

}
