import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Coin } from 'src/app/interfaces/coin';
import { ApiMonedasService } from 'src/app/services/api-monedas.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  @Input() idCollector: number;
  @Input() coins: Coin[];
  @Input() filterYear:string;
  @Input() filterFound:number;

  constructor(public api: ApiMonedasService) { }

  ngOnInit(): void {
  
  }

  addDeleteCoin(idCoin:number){
    console.log(this.idCollector)
    this.api.addDeleteCoinOfCollector(this.idCollector, idCoin).subscribe()
  }




}
