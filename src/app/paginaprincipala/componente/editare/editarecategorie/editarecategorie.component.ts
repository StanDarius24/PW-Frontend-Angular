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

  constructor(private route: ActivatedRoute, private cat: CategorieService,private router : Router) {
  }
  mybool =false;
  id;
  product;
  sec:number =3;
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
    this.mybool =true;
    setTimeout(() =>
      {
        this.sec= this.sec -1;
        setTimeout(() =>
          {
            this.sec= this.sec -1;
            setTimeout(() =>
              {
                this.sec= this.sec -1;
                this.router.navigate(['/list']).then();
              },
              1000);
          },
          1000);
      },
      1000);
  }
}
