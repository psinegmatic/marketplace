import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, Jsonp, Response} from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import { NgbModule } from  '@ng-bootstrap/ng-bootstrap';

/* Import Services*/
import { CommonService } from './services/common.service';

/* Import components */
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { NavbarComponent } from './components/common/header/navbar/navbar.component';
import { SearchPanelComponent } from './components/common/header/search-panel/search-panel.component';
import { InfoBlockComponent } from './components/common/header/info-block/info-block.component';
import { AccountBlockComponent } from './components/common/header/account-block/account-block.component';
import { SpecialOffersComponent } from './components/home/special-offers/special-offers.component';
import { RecommendedProductsComponent } from './components/home/recommended-products/recommended-products.component';
import { CatalogsComponent } from './components/home/catalogs/catalogs.component';
import { CatalogItemsComponent } from './components/home/catalog-items/catalog-items.component';
import { AdvertisementComponent } from './components/home/advertisement/advertisement.component';
import { HomeComponent } from './components/home/home.component';
import { LocationComponent } from './components/common/header/location/location.component';
import {LocationService} from "./services/location.service";

/* Routes */
const appRoutes: Routes = [
  {path: '', component: HomeComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    SearchPanelComponent,
    InfoBlockComponent,
    AccountBlockComponent,
    SpecialOffersComponent,
    RecommendedProductsComponent,
    CatalogsComponent,
    CatalogItemsComponent,
    AdvertisementComponent,
    HomeComponent,
    LocationComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule,
    JsonpModule,
    NgbModule.forRoot()
  ],
  providers: [
    CommonService,
    LocationService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
