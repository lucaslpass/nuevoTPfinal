import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-btn-sub',
  templateUrl: './btn-sub.component.html',
  styleUrls: ['./btn-sub.component.css']
})
export class BtnSubComponent implements OnInit {

  @Input() mensaje="";

  constructor() { }

  ngOnInit(): void {
  }

}

