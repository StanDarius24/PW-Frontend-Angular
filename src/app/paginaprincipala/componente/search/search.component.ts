import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {ProduseService} from '../../services/produse.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  name: string;
  product;
  constructor(private route: ActivatedRoute,
              private productService: ProduseService) { }

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
        console.warn(this.product);
      });
    });
  }

}
