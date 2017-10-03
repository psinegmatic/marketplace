import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, Jsonp, Response} from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import { NgbModule } from  '@ng-bootstrap/ng-bootstrap';

/* Import Services*/

/* Import components */
import { AppComponent } from './app.component';

/* Routes */
const appRoutes: Routes = [
  //{path: '', component: HomeComponent},
];

@NgModule({
  declarations: [
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
