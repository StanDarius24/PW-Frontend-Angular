import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {ProduseService} from '../../services/produse.service';
import {map} from 'rxjs/operators';
import {CategorieService} from '../../services/categorie.service';
declare let $: any;
@Component({
  selector: 'app-produs',
  templateUrl: './produs.component.html',
  styleUrls: ['./produs.component.css']
})
export class ProdusComponent implements OnInit {
  id: number;
  product;
  name :string ='fail';
  constructor(private route: ActivatedRoute,
              private productService: ProduseService,
              private cart : CategorieService) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map((param: ParamMap) => {
        // @ts-ignore
        return param.params.id;
      })
    ).subscribe(prodId => {
      this.id = prodId;
      this.productService.getSingleProduct(this.id).subscribe(prod => {
        this.product = prod;
        console.log('vall '+ this.product);
        this.cart.getSinglecategory(this.product.categorie).subscribe(prov =>{
          this.name = prov.name;
          console.log('val ' + prov.name);
        });
        console.warn(this.product);
      });
    });

  }


}
