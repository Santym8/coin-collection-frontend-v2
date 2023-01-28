import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Coin } from 'src/app/interfaces/coin';
import { ApiMonedasService } from 'src/app/services/api-monedas.service';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  @Input() token: string;
  @Input() coins: Coin[] = [];
  @Input() idCollection: string;
  @Input() filterYear:string;
  @Input() filterFound:number;


  @Output() NumberFoundCoinsEvent = new EventEmitter<number>();

  constructor(public api: ApiMonedasService, private router:Router) { }

  ngOnInit(): void {
    
  }

  addDeleteCoin(idCoin:string){
    this.api.addDeleteCoinOfCollector(this.token, idCoin).subscribe(
      () => this.getCoinsCollection()
     )
  }


  private getCoinsCollection(){
    this.api.getCoinsOfCollector(this.token, this.idCollection).subscribe(
      (coins) => {this.coins = coins as Coin[]; this.countFoundCoins(); this.sendNumberFoundCoins()}

    )
  }


  
  private countFoundCoins() {
    let count = 0;
    for (let i = 0; i < this.coins.length; i++) {
      if (this.coins[i].found == true) {
        count++;
      }
    }
    return count;
  }


  public sendNumberFoundCoins(){
    this.NumberFoundCoinsEvent.emit(this.countFoundCoins());
  }



}
