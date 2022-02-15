import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
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
  src?:string ;

  @Input() data:any;

  @Output() editTitle = new EventEmitter<any>();
  @Output() editExp   = new EventEmitter<any>();
  @Output() editImg   = new EventEmitter<any>();

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
    console.log(  "selectTitle" + this.name)
    }
    selectExp(){
      this.exp = this.data.exp;
      console.log(this.exp)
      }
      selectImg(){
        this.selectName = this.data.src + this.data.alt;
        console.log(this.selectName)
        }
    envioDataTitle(){
        this.data.nameE=this.name;
        this.editTitle.emit(this.data);
        console.log(this.editTitle)

    }
    envioDataExp(){
      this.data.exp=this.exp;
      console.log(this.data);
      return this.editExp.emit(this.data);

  }
  envioDataImg(){
    this.data.src=this.src;
    return this.editImg.emit(this.data)
  }

}

