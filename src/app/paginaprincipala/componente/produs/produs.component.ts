import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {ProduseService} from '../../services/produse.service';
import {map} from 'rxjs/operators';
import {Model} from '../model/model.bazadedate';
declare let $: any;
@Component({
  selector: 'app-produs',
  templateUrl: './produs.component.html',
  styleUrls: ['./produs.component.css']
})
export class ProdusComponent implements OnInit {
  id: number;
  product;
  constructor(private route: ActivatedRoute,
              private productService: ProduseService) { }

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
        console.warn(this.product);
      });
    });

  }


}
