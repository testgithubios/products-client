import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';
import {TranslateModule, TranslateLoader, TranslateStaticLoader, TranslateService} from 'ng2-translate';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Http } from '@angular/http';
import { AppRoutingModule } from './/app-routing.module';
import { AllProductsComponent } from './component/all-products/all-products.component';
export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, '../assets/i18n', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    AllProductsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    AppRoutingModule
  ],
  exports: [TranslateModule],
  providers: [TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
