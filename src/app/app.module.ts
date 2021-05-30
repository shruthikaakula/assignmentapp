import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClient, HttpClientModule} from '@angular/common/http';


import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AcrylicComponent } from './acrylic/acrylic.component';
import { OilComponent } from './oil/oil.component';
import { PencilComponent } from './pencil/pencil.component';
import { CharcoalComponent } from './charcoal/charcoal.component';
/*import { PradyuthaComponent } from './pradyutha/pradyutha.component';
import { HariniComponent } from './harini/harini.component';
import { ShaliniComponent } from './shalini/shalini.component';*/


import { from } from 'rxjs';

/*import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductSComponent } from './product-s/product-s.component';*/
import { TestComponent } from './test/test.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,

    HomeComponent,
    AcrylicComponent,
    OilComponent,
    PencilComponent,
    CharcoalComponent,
    /*ProductDetailsComponent,
    ProductSComponent,
    PradyuthaComponent,
    HariniComponent,
    ShaliniComponent,*/
    
    TestComponent,
          UserdetailsComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }