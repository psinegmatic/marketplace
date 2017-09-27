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
  navigationItems: any[] = [
    {
      name: 'Электроника',
      url: '1',
      childList: [
        {
          name: 'Мобильные телефоны',
          url: '2'
        },
        {
          name: 'Умные часы и браслеты',
          url: '2'
        },
        {
          name: 'Телефизоры',
          url: '2'
        },
        {
          name: 'Фото- и видеокамеры',
          url: '2'
        },
        {
          name: 'Аудио- и видеотехника',
          url: '2'
        },
        {
          name: 'Наушники',
          url: '2'
        },
        {
          name: 'Игровые приставки',
          url: '2'
        },
        {
          name: 'GPS-навигаторы',
          url: '2'
        },
      ]
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
