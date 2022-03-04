import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiMonedasService {

  private root = "http://127.0.0.1:3000/api"

  constructor(public http: HttpClient) { }


  logIn(username:string, password:string){
    let params = {
      'username':username, 
      'password':password
    }
    return this.http.get(
      this.root.concat("/user/"), 
      {params:params}
    )
  }

  singUp(username:string, password:string, email:string){
    let body = {'password':password, 'username':username, 'email':email}
    return this.http.post(this.root.concat('/user/create'), body)
  }


  getCoinsOfCollector(idCollector:string, idCollection:string){
    let params = {
      'idCollector': idCollector,
      'idCollection': idCollection
    }
    return this.http.get(
      this.root.concat('/coin/coins_of_collector'),
      {params:params}
    )
  }

  addDeleteCoinOfCollector(idCollector:string, idCoin:string){
    let body = {
      'idCollector': idCollector,
      'idCoin':idCoin,          
    }
    return this.http.put(this.root.concat('/coin/add_delete'),body)
  }

  getCollections(){
    return this.http.get(this.root.concat('/coin/programs'))
  }
}
