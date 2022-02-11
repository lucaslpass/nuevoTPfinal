import { Component, OnInit,Input } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.css']
})
export class CardEditComponent implements OnInit {
  _title=false;
  _exp=false;
  _edit="edit";
  _all="_all";
  selectName?:Data;
  name?:string;
  exp?:string;
  @Input() data:any;

  constructor() { }

  ngOnInit(): void {
  }

  editAction( editSelect:string){

    console.log("este es el mensaje" + editSelect)
  }
  cardView( thisAction:boolean){
    this.data = thisAction;
    console.log("esto"+ thisAction
     )
  }
  selectCard(name:Data){
   this.selectName= this.data;
   console.log(this.selectName)
   }
   selectTitle(){
    this.name = this.data.nameE;
    console.log(this.selectName)
    }
    selectExp(){
      this.exp = this.data.exp;
      console.log(this.selectName)
      }
      selectImg(){
        this.selectName = this.data.src + this.data.alt;
        console.log(this.selectName)
        }



}

