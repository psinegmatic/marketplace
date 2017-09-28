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
      id: 1,
      name: 'Электроника',
      url: '1',
      visible: true,
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
      id: 2,
      name: 'Компьютеры',
      url: '2',
      visible: true,
      childList: [
        {
          name: 'Ноутбуки',
          url: '2'
        },
        {
          name: 'Планшеты',
          url: '2'
        },
        {
          name: 'Настольные компьютеры',
          url: '2'
        },
        {
          name: 'Комплектующие',
          url: '2'
        },
        {
          name: 'Мониторы',
          url: '2'
        },
        {
          name: 'Принтеры и МФУ',
          url: '2'
        },
        {
          name: 'Игровые приставки',
          url: '2'
        },
        {
          name: 'Сетевое оборудование',
          url: '2'
        },
        {
          name: 'Накопители данных',
          url: '2'
        },
        {
          name: 'Аксессуары',
          url: '2'
        },
      ]
    },
    {
      id: 3,
      name: 'Батовая техника',
      url: '3',
      visible: true,
      childList: [
        {
          name: 'Крупная техника для кухни',
          url: '2'
        },
        {
          name: 'Приготовление напитков',
          url: '2'
        },
        {
          name: 'Измельчение и смешивание',
          url: '2'
        },
        {
          name: 'Приготовление блюд',
          url: '2'
        },
        {
          name: 'Техника для дома',
          url: '2'
        },
        {
          name: 'Климатическая техника',
          url: '2'
        },
        {
          name: 'Встраиваемая техника',
          url: '2'
        },
        {
          name: 'Техника для красоты',
          url: '2'
        }
      ]
    },
    {
      id: 4,
      visible: true,
      name: 'Детские товары',
      childList: [
        {
          name: 'Для мам и малышей',
          url: '2'
        },
        {
          name: 'Подгузники',
          url: '2'
        },
        {
          name: 'Детское питание',
          url: '2'
        },
        {
          name: 'Коляски',
          url: '2'
        },
        {
          name: 'Кроватки',
          url: '2'
        },
        {
          name: 'Автокресла',
          url: '2'
        },
        {
          name: 'Игрушки',
          url: '2'
        },
        {
          name: 'Хобби и творчество',
          url: '2'
        },
        {
          name: 'Детский спорт',
          url: '2'
        },
        {
          name: 'Для школы',
          url: '2'
        }
      ]
    },
    {
      id:5,
      visible: true,
      name: 'Зоотовары',
      childList: [
        {
          name: 'Корма для кошек',
          url: '2'
        },
        {
          name: 'Корма для собак',
          url: '2'
        },
        {
          name: 'Товары для кошек',
          url: '2'
        },
        {
          name: 'Товары для собак',
          url: '2'
        },
        {
          name: 'Товары для птиц',
          url: '2'
        },
        {
          name: 'Товары для грызунов',
          url: '2'
        },
        {
          name: 'Товары для рыб',
          url: '2'
        }
      ]
    },
    {
      id:6,
      visible: true,
      name: 'Дом, дача, ремонт',
      childList: [
        {
          name: 'Всё для дачи',
          url: '2'
        },
        {
          name: 'Садовая техника',
          url: '2'
        },
        {
          name: 'Отдых и пикник',
          url: '2'
        },
        {
          name: 'Всё для ремонта',
          url: '2'
        },
        {
          name: 'Мебель',
          url: '2'
        },
        {
          name: 'Посуда и кухня',
          url: '2'
        },
        {
          name: 'Хозтовары',
          url: '2'
        },
        {
          name: 'Бытовая химия',
          url: '2'
        },
        {
          name: 'Освещение',
          url: '2'
        },
        {
          name: 'Интерьер',
          url: '2'
        },
        {
          name: 'Текстиль',
          url: '2'
        }
      ]
    },
    {
      id:7,
      visible: true,
      name: 'Одежда и обувь',
      childList: [
        {
          name: 'Женщинам',
          url: '2'
        },
        {
          name: 'Мужчинам',
          url: '2'
        },
        {
          name: 'Девочкам',
          url: '2'
        },
        {
          name: 'Мальчикам',
          url: '2'
        },
        {
          name: 'Малышам',
          url: '2'
        },
        {
          name: 'Сумки и чемоданы ',
          url: '2'
        },
        {
          name: 'Аксессуары',
          url: '2'
        }
      ]
    },
    {
      id:8,
      visible: true,
      name: 'Красота и здоровье',
      childList: [
        {
          name: 'Аптека',
          url: '2'
        },
        {
          name: 'Макияж',
          url: '2'
        },
        {
          name: 'Парфюмерия',
          url: '2'
        },
        {
          name: 'Уход за лицом',
          url: '2'
        },
        {
          name: 'Уход за волосами',
          url: '2'
        },
        {
          name: 'Уход за телом',
          url: '2'
        },
        {
          name: 'Техника для красоты',
          url: '2'
        }
      ]
    },
    {id:9,
      visible: true,
      name: 'Авто',
      childList: [
        {
          name: 'Шины',
          url: '2'
        },
        {
          name: 'Диски',
          url: '2'
        },
        {
          name: 'Видео-регистраторы',
          url: '2'
        },
        {
          name: 'Аудио и видео',
          url: '2'
        },
        {
          name: 'Аксессуары',
          url: '2'
        },
        {
          name: 'Запчасти',
          url: '2'
        },
        {
          name: 'Автохимия',
          url: '2'
        },
        {
          name: 'Противоугонные устройства',
          url: '2'
        }
      ]
    }
  ]

  getNavigationItem() {
    return this.navigationItems;
  }

}
