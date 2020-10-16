import { Component, OnInit } from '@angular/core';
import {ProduseService} from '../../services/produse.service';
import {map} from 'rxjs/operators';
import {ParamMap, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  constructor(private produseServicii: ProduseService,private route :ActivatedRoute) { }
  name: string;
  product;
  model: any[];
  ngOnInit(): void {
    this.route.paramMap.pipe(
      map((param: ParamMap) => {
        // @ts-ignore
        return param.params.nume;
      })
    ).subscribe(catName => {
      this.name = catName;
      this.produseServicii.getProductFromCategory(this.name).subscribe(prod => {
        this.product = prod;
        this.model =this.product.products;
        console.warn(this.product);
        console.warn(this.model);
      });
    });


  }


}
