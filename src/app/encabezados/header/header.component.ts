import { Component, OnInit } from '@angular/core';
import { BtnC } from 'src/app/btnc';
import { BTNC } from 'src/app/mock-btncs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  baner: any ={class_img:"img-baner"}
  foto:any={class_img:"img-foto"}


  constructor() { }

  ngOnInit(): void {
  }

}
