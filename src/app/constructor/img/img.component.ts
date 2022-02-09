import { Component, Input, OnInit,  } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit {
  @Input() classImg:any;
  @Input() data :any;


  constructor() { }

  ngOnInit(): void {
  }
}
