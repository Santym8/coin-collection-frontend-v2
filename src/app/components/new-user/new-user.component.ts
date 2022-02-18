import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Collector } from 'src/app/interfaces/collector';
import { ApiMonedasService } from 'src/app/services/api-monedas.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  username: string;
  password: string;
  passwordConfirm: string;
  email: string;

  constructor(private api: ApiMonedasService, private router: Router) { }

  ngOnInit(): void {
  }

  private validatePassword(): boolean {
    if (this.password == this.passwordConfirm) {
      return true;
    }
    return false;
  }

  public register() {
    if (this.validatePassword()) {
      this.api.singUp(this.username, this.password, this.email).subscribe(
        (user) => {
          let collector = user as Collector;
          if (collector.username) {
            let queryParams = {
              'id': collector.id,
              'username': collector.username,
              'email': collector.email
            }
            this.router.navigate(['user-panel'], { queryParams: queryParams });
          }
          else {
            console.log("Invalid")
          }
        }
      )
    }

  }




}
