import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/*
import { AppRoutingModule } from './app-routing.module';
*/
import { AppComponent } from './app.component';
import { BottonComponent } from './btns/botton/botton.component';
import { HeaderComponent } from './encabezados/header/header.component';
import { BodyComponent } from './encabezados/body/body.component';
import { BtnEditComponent } from './btns/btn-edit/btn-edit.component';
import { BtnDeleteBackComponent } from './btns/btn-delete-back/btn-delete-back.component';
import { BtnSubComponent } from './btns/btn-sub/btn-sub.component';
import { ImgComponent } from './constructor/img/img.component';
import { TitleComponent } from './constructor/title/title.component';
import { ImgCardComponent } from './card/img-card/img-card.component';
import { CardEditComponent } from './card/card-edit/card-edit.component';
import { CardComponent } from './card/card/card.component';
import { LoginComponent } from './card/login/login.component';
import { HomeComponent } from './encabezados/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './encabezados/sidebar/sidebar.component';



@NgModule({
  declarations: [
    AppComponent,

    BottonComponent,
    HeaderComponent,
    BodyComponent,
    BtnEditComponent,
    BtnDeleteBackComponent,
    BtnSubComponent,
    ImgComponent,
    TitleComponent,
    ImgCardComponent,
    CardEditComponent,
    CardComponent,
    LoginComponent,
    HomeComponent,
    SidebarComponent,


  ],
  imports: [
    BrowserModule,
    /*
    HttpClientModule,
    AppRoutingModule
    */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
