import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiMonedasService {

  private root = "https://api-coins-collection.herokuapp.com/api"

  constructor(public http: HttpClient) { }


  logIn(username: string, password: string) {
    let params = {
      'username': username,
      'password': password
    }
    return this.http.get(
      this.root.concat("/user/"),
      { params: params }
    )
  }

  singUp(username: string, password: string, email: string) {
    let body = { 'password': password, 'username': username, 'email': email }
    return this.http.post(this.root.concat('/user/create'), body)
  }


  getCoinsOfCollector(token: string, idCollection: string) {
    let params = {
      'idCollection': idCollection
    }
    let headers = {
      "x-access-token": token
    }

    return this.http.get(
      this.root.concat('/coin/coins_of_collector'),
      { params: params, headers: headers }
    )
  }

  addDeleteCoinOfCollector(token: string, idCoin: string) {
    let body = {
      'idCoin': idCoin,
    }
    let headers = {
      "x-access-token": token
    }
    return this.http.put(this.root.concat('/coin/add_delete'), body, { headers: headers })
  }

  getCollections(token: string) {
    let headers = {
      "x-access-token": token
    }
    return this.http.get(this.root.concat('/coin/programs'), { headers: headers })
  }
}
