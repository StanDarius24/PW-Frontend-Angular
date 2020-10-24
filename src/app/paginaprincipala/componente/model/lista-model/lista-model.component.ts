import { Component, OnInit } from '@angular/core';

import {ProduseService} from '../../../services/produse.service';
import {Router} from "@angular/router";
import {CategorieService} from '../../../services/categorie.service';




@Component({
  selector: 'app-lista-componente',
  templateUrl: './lista-model.component.html',
  styleUrls: ['./lista-model.component.css']
})

export class ListaModelComponent implements OnInit {
  constructor(private produseService: ProduseService, private router: Router,private cat :CategorieService) {

  }
  ids:number =0;
  modele: any[] = [];
  numecat:string ='';
  categ: string[] =[];
  i:number;
  ngOnInit(): void {
  this.produseService.citesteDinBazaDeDATE().subscribe((prod: {count: Number, products: any[]}) => {
  this.modele = prod.products;
  });
  }




/*
this.route.paramMap.pipe(
      map((param: ParamMap) => {
        // @ts-ignore
        return param.params.id;
      })
    ).subscribe(prodId => {
      this.id = prodId;
      this.productService.getSingleProduct(this.id).subscribe(prod => {
        this.product = prod;
        console.warn(this.product);
      });
    });


for(this.i=0;this.i<this.modele.length;this.i=this.i+1){
    this.cat.getSinglecategory(this.modele[this.i].categorie).subscribe(prodname => {
     this.categ.push(prodname.name);
    this.model[i].setValue["categorie"]=prodname.name;
    })
    }

  */

  selectProduct(id: number) {
   this.router.navigate(['/produs', id]).then();
    console.log(id);
}



}
