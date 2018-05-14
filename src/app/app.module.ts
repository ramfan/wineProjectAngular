import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import {HttpClientModule} from '@angular/common/http';
import {Data} from './services/data.service';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {ShareService} from './services/share.service';
import { PipePipe } from './pipes/pipe.pipe';

const rout = [
    {path: '', component: HomeComponent},
    {path: 'catalog', component: CatalogComponent},
    {path: '**', redirectTo: ''}
];
@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    HomeComponent,
    ProductComponent,
    ShopingCartComponent,
    PipePipe
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(rout), HttpClientModule, AngularFontAwesomeModule
  ],
  providers: [Data, ShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
