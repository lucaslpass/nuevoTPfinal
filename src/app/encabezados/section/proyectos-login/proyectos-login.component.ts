import { Component, OnInit } from '@angular/core';
import { PROYECTO } from 'src/app/mock-proyectos';
import { Proyecto } from 'src/app/proyectos';

@Component({
  selector: 'app-proyectos-login',
  templateUrl: './proyectos-login.component.html',
  styleUrls: ['./proyectos-login.component.css']
})
export class ProyectosLoginComponent implements OnInit {
  proyectos=PROYECTO;
  selectName?:Proyecto
  _card= false;
  _login=false;
  constructor() { }

  ngOnInit(): void {
  }
  cardView( thisAction:boolean){
    this._card = thisAction;
    console.log("esto"+ thisAction
     )
  }
  selectCard(name:Proyecto){
   this.selectName= name;
   console.log(this.selectName.nameE)
   }

}
