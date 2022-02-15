
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/*import { VigilanteLoginGuard } from './vigilante-login.guard';*/
import { AppComponent } from './app.component';
import { LoginComponent } from './card/login/login.component';

import { HomeComponent } from './encabezados/home/home.component';
import { HeaderComponent } from './encabezados/header/header.component';
import { BodyComponent } from './encabezados/body/body.component';
import { ProyectosComponent } from './encabezados/section/proyectos/proyectos.component';
import { ExperienciaComponent } from './encabezados/section/experiencia/experiencia.component';
import { EducacionComponent } from './encabezados/section/educacion/educacion.component';
import { HardComponent } from './encabezados/section/hard/hard.component';

import { HomeLoginComponent } from './encabezados/home-login/home-login.component';
import { HeaderLoginComponent } from './encabezados/header-login/header-login.component';
import { BodyLoginComponent } from './encabezados/body-login/body-login.component';
import { ExperienciaLoginComponent } from './encabezados/section/experiencia-login/experiencia-login.component';
import { EducacionLoginComponent } from './encabezados/section/educacion-login/educacion-login.component';
import { HardLoginComponent } from './encabezados/section/hard-login/hard-login.component';
import { ProyectosLoginComponent } from './encabezados/section/proyectos-login/proyectos-login.component';




const routes: Routes = [
  {
    path:'',
    redirectTo :'/home',
    pathMatch: 'full',
    },
  {
path:'home',
component : HomeComponent,
},
{
path:'home-login',
component: HomeLoginComponent,
/*canActivate:[VigilanteLoginGuard]*/
},
{
  path:'header/login',
  component: LoginComponent,

  },
  //{
  //  path:'header',
  //  component:HeaderComponent,
      /*canActivate:[VigilanteLoginGuard]*/
  //},

    {
      path:'headerlogin',
      component:HeaderLoginComponent,
        /*canActivate:[VigilanteLoginGuard]*/

      },
  {
    path:'body',
    component:BodyComponent,
      /*canActivate:[VigilanteLoginGuard]*/

    },
    {
      path:'body',
      component:BodyLoginComponent,

      },
  {
    path:'body/Educacion',
    component:EducacionComponent,

    },
  {
    path:'EducacionLogin',
    component:EducacionLoginComponent,
      /*canActivate:[VigilanteLoginGuard]*/
    },
  {
    path:'body/Experiencia',
    component: ExperienciaComponent,

      }
      ,
  {
    path:'ExperienciaLogin',
    component: ExperienciaLoginComponent,
    /*canActivate:[VigilanteLoginGuard]*/
    }
          ,
  {
    path:'body/Proyectos',
    component: ProyectosComponent,

      },
   {
    path:'ProyectosLogin',
    component:ProyectosLoginComponent,
    /*canActivate:[VigilanteLoginGuard]*/
    },
  {
    path:'body/Hard&SoftSkills',
    component: HardComponent,

      },
  {
    path:'Hard&SoftSkillsLogin',
    component: HardLoginComponent,
    /*canActivate:[VigilanteLoginGuard]*/
          }
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


