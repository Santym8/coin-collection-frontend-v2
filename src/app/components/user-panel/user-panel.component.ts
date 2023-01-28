import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Coin } from 'src/app/interfaces/coin';
import { Collection } from 'src/app/interfaces/collection';
import { ApiMonedasService } from 'src/app/services/api-monedas.service';



@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {



  //------User----------
  token: string;
 

  //-----------Contorl Panel
  numberFoundCoins:number = 0;
  collections: Collection[] = [];
  coins: Coin[] = [];

  //--------Filters------------
  filterCollectionId: string = "";
  filterYear: string = "";
  filterFound: number = -1;

  //-------------Child Component-----------------
 
  constructor(private route: ActivatedRoute, private api: ApiMonedasService) { }

  ngOnInit(): void {
    let queryParams = this.route.snapshot.queryParams;
    this.token = queryParams['token'];
    this.getCollections();
    this.getCoinsCollection();
  }


  //-------------Filters-----------------
  public changeFilterCollection(collection: Collection) {
    this.filterCollectionId = collection._id;
    this.getCoinsCollection();
  }

  public changeFilterFound(status: number) {
    this.filterFound = status;
  }

  //---------Counters-------------
  public getAmountCollection(idCollection: string): number {
    for (let i = 0; i < this.collections.length; i++) {
      if (this.collections[i]._id == idCollection) {
        return this.collections[i].amount;
      }
    }
    return 0;
  }

  public setNumberFoundCoins(num:number){
   this.numberFoundCoins = num;
  }


  //--------------BBDD--------------
  private getCollections() {
    this.api.getCollections(this.token).subscribe(
      (collections) => {
        this.collections = collections as Collection[];
      }
    );
  }

  private getCoinsCollection() {
    this.api.getCoinsOfCollector(this.token, this.filterCollectionId).subscribe(
      (coins) => { this.coins = coins as Coin[]; }

    )
  }








}
