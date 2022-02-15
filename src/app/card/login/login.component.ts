import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { min } from 'rxjs';
/*import { send } from 'process';*/

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
_all="_all";
_abierto=true;
estado="";

  public formLogin= new FormGroup({}) ;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
   this.formLogin = this.formBuilder.group( {
     email:['',[Validators.required, Validators.email]],
     password:['', Validators.required, Validators.minLength(6),
     Validators.maxLength(12)

    ]
   });}
   send():any{
     console.log(this.formLogin.value);
   }
   cerrar(){
     this._abierto=false;
   }
  }


