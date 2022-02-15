import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home-login',
  templateUrl: './home-login.component.html',
  styleUrls: ['./home-login.component.css']
})
export class HomeLoginComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
  }

}
