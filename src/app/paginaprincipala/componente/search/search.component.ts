import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {ProduseService} from '../../services/produse.service';
import {CategorieService} from '../../services/categorie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  name: string;
  product;
  catego :string;
  constructor(private route: ActivatedRoute,
              private productService: ProduseService,private cate :CategorieService) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map((param: ParamMap) => {
        // @ts-ignore
        return param.params.name;
      })
    ).subscribe(prodName => {
      this.name = prodName;
      this.productService.getSingleProductbyname(this.name).subscribe(prod => {
        this.product = prod;
        this.cate.getSinglecategory(this.product.categorie).subscribe(prow => {
          this.catego= prow.name;
        })
      });
    });
  }

}
