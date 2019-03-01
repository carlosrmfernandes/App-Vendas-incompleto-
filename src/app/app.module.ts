import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddItensComponent } from './component/add-itens/add-itens.component';
import { HttpClientModule } from '@angular/common/http';
import { Api } from './resources/api';

@NgModule({
  declarations: [
    AppComponent,
    AddItensComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    Api
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
