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
  id: number;
  username: string;
  email: string;


  //-----------Contorl Panel
  numberCoinsFoud: number = 0;
  collections: Collection[];
  coins: Coin[];

  //--------Filters------------
  filterCollectionId: number = 1;
  filterYear: string = "";
  filterFound: number = -1;

  constructor(private route: ActivatedRoute, private api: ApiMonedasService) { }

  ngOnInit(): void {
    let queryParams = this.route.snapshot.queryParams;
    this.id = queryParams['id'];
    this.username = queryParams['username'];
    this.email = queryParams['email'];
    this.getCollections();
    this.getCoinsCollection();

  }


  //-------------Filters-----------------
  public changeFilterCollection(collection: Collection) {
    this.filterCollectionId = collection.id;
    this.getCoinsCollection();
  }

  public changeFilterFound(status: number) {
    this.filterFound = status;
  }

  public getAmountCollection(idCollection: number): number {
    for (let i = 0; i < this.collections.length; i++) {
      if (this.collections[i].id == idCollection) {
        return this.collections[i].amount;
      }
    }
    return 0;
  }


  //--------------BBDD--------------
  private getCollections() {
    this.api.getCollections().subscribe(
      (collections) => {
        this.collections = collections as Collection[];
      }
    );
  }

  private getCoinsCollection(){
    this.api.getCoinsOfCollector(this.id, this.filterCollectionId).subscribe(
      (coins) => {this.coins = coins as Coin[]; console.log(this.coins)}

    )
  }

  
  





}
