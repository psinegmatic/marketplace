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
  kladrCitiesList: any;

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
              observer.next(res.metaDataProperty.GeocoderMetaData.AddressDetails.Country.AdministrativeArea.AdministrativeAreaName);
              observer.complete();
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
      ymaps.geocode(queryString).then(
        function (res) {
          console.log(res.geoObjects.get(0).properties.get('metaDataProperty').getAll());
          observer.next(res);
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
