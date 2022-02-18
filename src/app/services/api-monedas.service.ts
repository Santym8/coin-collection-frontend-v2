import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiMonedasService {

  private root = "http://127.0.0.1:8000/api/"

  constructor(public http: HttpClient) { }


  logIn(username:string, password:string){
    let params = {
      'username':username, 
      'password':password
    }
    return this.http.get(
      this.root.concat("collector/login/"), 
      {params:params}
    )
  }

  singUp(username:string, password:string, email:string){
    let body = {'password':password, 'username':username, 'email':email}
    return this.http.post(this.root.concat('collector/new/'), body)
  }


  getCoinsOfCollector(idCollector:number, idCollection:number){
    let params = {
      'pk_collector': idCollector,
      'pk_collection': idCollection
    }
    return this.http.get(
      this.root.concat('collector/coins/'),
      {params:params}
    )
  }

  addDeleteCoinOfCollector(idCollector:number, idCoin:number){
    let body = {
      'pk_collector': idCollector,
      'pk_coin': idCoin,
    }
    return this.http.put(this.root.concat('collector/'),{
      body:body
    })
  }

  getCollections(){
    return this.http.get(this.root.concat('collections'))
  }
}
