import { Component, OnInit } from '@angular/core';

import {ProduseService} from '../../../services/produse.service';
import {Router} from "@angular/router";




@Component({
  selector: 'app-lista-componente',
  templateUrl: './lista-model.component.html',
  styleUrls: ['./lista-model.component.css']
})

export class ListaModelComponent implements OnInit {
  constructor(private produseService: ProduseService, private router: Router) {

  }
  modele: any[] = [];


  ngOnInit(): void {
  this.produseService.citesteDinBazaDeDATE().subscribe((prod: {count: Number, products: any[]}) => {
  this.modele = prod.products;
  console.log(this.modele);
  } )
  }

  selectProduct(id:Number) {
    this.router.navigate(['/produs', id]).then();
    console.log(id);
  }



}
