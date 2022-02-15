import { Component, OnInit } from '@angular/core';
import { BtnC } from 'src/app/btnc';
import { BTNC } from 'src/app/mock-btncs';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  btncs= BTNC;
  ap: any={
    class_img:"img-ap",
    src:"https://argentinaprograma.inti.gob.ar/pluginfile.php/1/theme_moove/logo/1640653338/APLogo-20-20.png",
    alt:"icono argentina programa",
}
  constructor() { }

  ngOnInit(): void {
  }

}
