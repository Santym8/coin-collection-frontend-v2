import { Component, OnInit } from '@angular/core';
import { ApiMonedasService } from 'src/app/services/api-monedas.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  username:string;
  password:string;
  passwordConfirm:string;
  email:string;

  constructor(private api: ApiMonedasService) { }

  ngOnInit(): void {
  }

  private validatePassword() : boolean {
    if (this.password == this.passwordConfirm){
      return true;
    }
    return false;
  }

  public register(){
    if (this.validatePassword()){    
      this.api.singUp(this.username, this.password, this.email).subscribe(
        (user) => console.log(user)

      )
    }
    
  }




}
