import { Component, OnInit } from '@angular/core';
import {ProduseService} from '../../services/produse.service';
import {map} from 'rxjs/operators';
import {ParamMap, ActivatedRoute, Router} from '@angular/router';
import {CategorieService} from '../../services/categorie.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  constructor(private produseServicii: ProduseService,private route :ActivatedRoute, private router: Router,private categ: CategorieService) { }
  name: string;
  product;
  model: any[];
  varx:string ='fail';
  ngOnInit(): void {

    this.route.paramMap.pipe(
      map((param: ParamMap) => {
        // @ts-ignore
        return param.params.nume;
      })
    ).subscribe(catName => {
      this.name = catName;
      this.varx = this.name.slice(1);
      this.produseServicii.getProductFromCategory(this.name).subscribe(prod => {
        this.product = prod;
        this.model =this.product.products;
        console.warn(this.product);
        console.warn(this.model);
      });

    });



  }
  selectProduct(id:number) {
    this.router.navigate(['/produs', id]).then();
    console.log(id);
  }


}
