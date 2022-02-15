import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorTailorModule } from '@ngneat/error-tailor';


import { AppRoutingModule } from './app-routing.module';

import { CookieService } from 'ngx-cookie-service';
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
import { ProyectosComponent } from './encabezados/section/proyectos/proyectos.component';
import { ExperienciaComponent } from './encabezados/section/experiencia/experiencia.component';
import { EducacionComponent } from './encabezados/section/educacion/educacion.component';
import { HardComponent } from './encabezados/section/hard/hard.component';
import { HomeLoginComponent } from './encabezados/home-login/home-login.component';
import { ExperienciaLoginComponent } from './encabezados/section/experiencia-login/experiencia-login.component';
import { EducacionLoginComponent } from './encabezados/section/educacion-login/educacion-login.component';
import { HardLoginComponent } from './encabezados/section/hard-login/hard-login.component';
import { ProyectosLoginComponent } from './encabezados/section/proyectos-login/proyectos-login.component';
import { BodyLoginComponent } from './encabezados/body-login/body-login.component';
import { HeaderLoginComponent } from './encabezados/header-login/header-login.component';
import { NavMenuComponent } from './encabezados/nav-menu/nav-menu.component';




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
    ProyectosComponent,
    ExperienciaComponent,
    EducacionComponent,
    HardComponent,
    HomeLoginComponent ,
    ExperienciaLoginComponent,
    EducacionLoginComponent,
    HardLoginComponent,
    ProyectosLoginComponent,
    HeaderLoginComponent,
    BodyLoginComponent,
    NavMenuComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ErrorTailorModule.forRoot({
      errors: {
        useValue: {
          required: 'This field is required',
          minlength: ({ requiredLength, actualLength }) =>
                      `Expect ${requiredLength} but got ${actualLength}`,
          invalidAddress: error => `Address isn't valid`
        }
      }
    }),
    /*
    HttpClientModule,*/
    AppRoutingModule

  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
