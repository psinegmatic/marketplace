import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Jsonp} from '@angular/http';
import { NavigationItem } from '../models/navigation-item';

@Injectable()
export class CommonService {
  kladrAPIUrl: string = "http://kladr-api.ru/api.php?";
  constructor(private jsonp: Jsonp) {

  }

  getKladrCitiesList(query) {
    this.jsonp.get(this.kladrAPIUrl + "query=" + query + "&contentType=city&limit=5").map(res => {
      return res.json().results.map(item => {
        console.log(item);
      });
    });

    return true;
  }


  /*-----------------------------------------*/
  navigationItems: NavigationItem[] = [
    {
      name: 'ТВ и Видеотехника',
      url: '1'
    },
    {
      name: 'Канцелярия',
      url: '2'
    },
    {
      name: 'Компьютеры',
      url: '3'
    },
    {
      name: 'Оргтехника'
    },
    {
      name: 'Климатическая техника'
    },
    {
      name: 'Телефоны'
    },
    {
      name: 'Бизнес-литература'
    },
    {
      name: 'Продукты питания'
    },
    {
      name: 'Товары для отдыха'
    }
  ]

  getNavigationItem() {
    return this.navigationItems;
  }

}
