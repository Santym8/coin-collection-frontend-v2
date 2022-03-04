
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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


  constructor(private api: ApiMonedasService, private router:Router) { }

  ngOnInit(): void {
    
  }

  public loing(){
    this.api.logIn(this.username, this.password).subscribe(
      (user) => {
        let collector = user as Collector;
          if(collector.username){
            let queryParams = {
              'id':collector._id,
              'username':collector.username,
              'email':collector.email
            }
            this.router.navigate(['user-panel'],{queryParams: queryParams});
          }
          else{
            console.log("Invalid")
          }  
      },
    )
  }



}
