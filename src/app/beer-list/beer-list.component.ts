import { Component, OnInit } from '@angular/core';
import { Beer } from './beer';
import { BeerDataService } from '../beer-data.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {
beers: Beer[];

  public cervezas: Beer[];

  constructor(private beerDataService : BeerDataService) { 
  }

  masCerveza(cerveza) {
    cerveza.stock ++;
  }
  
  menosCerveza(cerveza) {
    if (cerveza.stock > 0) {
      cerveza.stock --;
    }
  }

  getCLassOferta(cerveza) {
    console.log(cerveza)
    if (cerveza.oferta) {
      return 'green'
    }
  }

  soloNumeros(event) {
    console.log(event)
    if(event.key < "0" || event.key > "9") {
      event.preventDefault();
    }
  }

  ngOnInit() {
    const algo : any = {
      algo: 'kuncho',
      dos: '2'
    };

    this.beerDataService.getBeers().subscribe(
      response => {
        this.cervezas = [];
        for (const key in algo) {
          if (algo.hasOwnProperty(key)) {
            const element = response[key];
            console.log(element);
            this.cervezas.push(element);
          }
        }
      }
    );
  }

}
