import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ProduseService} from '../../../services/produse.service';
import {map} from 'rxjs/operators';
import {NgForm} from '@angular/forms';
import {CategorieService} from '../../../services/categorie.service';

@Component({
  selector: 'app-pageditare',
  templateUrl: './pageditare.component.html',
  styleUrls: ['./pageditare.component.css']
})
export class PageditareComponent implements OnInit {
  nume: string;
  id: number;
  product;
  modele: any[]=[];
  selectedCategory:string;
  sec: number =3;
  mybool: boolean =false;
  constructor(private route: ActivatedRoute,private router : Router,
              private productService: ProduseService,
              private category : CategorieService) { }

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
        this.category.citestecategory().subscribe( (prod: {count: Number, products: any[]}) => {
          this.modele= prod.products;
          console.log("aici avem din categorie");
          console.warn(this.modele);
        })
      });
    });
    this.nume=this.product.name;

  }

  submitForm(model)
  {
    console.log(this.product);
    if(model.name!= this.product.name && model.name != "")
    this.product.name=model.name;
    if(model.pret!= this.product.pret && model.pret != "")
      this.product.pret=model.pret;
    if(model.descriere!= this.product.descriere && model.descriere != "")
      this.product.descriere=model.descriere;
    if(model.datalansarii!= this.product.datalansarii && model.datalansarii != "")
      this.product.datalansarii=model.datalansarii;
    if(model.picture!= this.product.picture && model.picture != "")
      this.product.picture=model.picture;

      this.product.categorie=this.selectedCategory;

    this.productService.editeazadupaNume(this.product).subscribe(
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
  submit(event: any){

    this.selectedCategory=event.target.value;
    console.log(this.selectedCategory);
  }
}
