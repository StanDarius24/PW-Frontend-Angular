import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';
import {ParamMap, Router} from '@angular/router';
import {CategorieService} from '../../../services/categorie.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-editarecategorie',
  templateUrl: './editarecategorie.component.html',
  styleUrls: ['./editarecategorie.component.css']
})
export class EditarecategorieComponent implements OnInit {

  constructor(private route: ActivatedRoute, private cat: CategorieService) {
  }

  id;
  product;

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map((param: ParamMap) => {
        // @ts-ignore
        return param.params.id;
      })
    ).subscribe(prodId => {
      this.id = prodId;
      this.cat.getSinglecategory(this.id).subscribe(prod => {
        this.product = prod;
        console.log(this.product);
      });
    });

  }
  submitForm(id)
  {

    id.id=this.product.id;
    console.log(id);
   this.cat.editeazadupaCategorie(id).subscribe(
     res => {
       console.log(res);
     }
   );
  }
}
