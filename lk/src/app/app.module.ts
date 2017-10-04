import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, Jsonp, Response} from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import { NgbModule } from  '@ng-bootstrap/ng-bootstrap';

/* Import Services*/

/* Import components */
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { PriceListsComponent } from './components/price-lists/price-lists.component';
import { PriceListEditComponent } from './components/price-list-edit/price-list-edit.component';

/* Routes */
const appRoutes: Routes = [
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: '', component: DashboardComponent},
  {path: 'dashboard', component: DashboardComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SigninComponent,
    SignupComponent,
    PriceListsComponent,
    PriceListEditComponent
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
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
