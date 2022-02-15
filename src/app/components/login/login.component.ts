import { Component, OnInit } from '@angular/core';
import { Collector } from 'src/app/interfaces/collector';
import { ApiMonedasService } from 'src/app/services/api-monedas.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;

  user:Collector;

  constructor(private api: ApiMonedasService) { }

  ngOnInit(): void {
    
  }

  public loing(){
    this.api.logIn(this.username, this.password).subscribe(
      (user) => {this.user = user as Collector; console.log(user)},
      () => alert("Error")
    )


  }



}
