import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiMonedasService {

  private root = "http://127.0.0.1:8000/api/"

  constructor(public http: HttpClient) { }


  logIn(username:string, password:string){
    let params = new HttpParams();
    params.append('username', username);
    params.append('password', password);
    return this.http.get(
      this.root.concat("collector/login"), 
      {params:params}
    )
  }

  singUp(username:string, password:string, email:string){
    let body = {'password':password, 'username':username, 'email':email}
    return this.http.post(this.root.concat('collector/new'), body)
  }


  getCoinsOfCollector(idCollector:string, idCollection:string){
    let params = new HttpParams();
    params.append('pk_collector', idCollector);
    params.append('pk_collection', idCollection);
    return this.http.get(
      this.root.concat('collector/coins/'),
      {params:params}
    )
  }

  addDeleteCoinOfCollector(idCollector:string, idCoin:string){
    let params = new HttpParams();
    params.append('pk_collector', idCollector);
    params.append('pk_coin', idCoin);
    return this.http.put(
      this.root.concat('collector/'),
      {params:params}
    )

  }
}
