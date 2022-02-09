import { Component, OnInit } from '@angular/core';
import { BtnC } from 'src/app/btnc';
import { BTNC } from 'src/app/mock-btncs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  btncs= BTNC;
  baner: any ={class_img:"img-baner"}
  foto:any={class_img:"img-foto"}
  ap: any={
    class_img:"img-ap",
    src:"https://argentinaprograma.inti.gob.ar/pluginfile.php/1/theme_moove/logo/1640653338/APLogo-20-20.png",
    alt:"icono argentina programa",
}

  constructor() { }

  ngOnInit(): void {
  }

}
