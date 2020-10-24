import { Component, OnInit } from '@angular/core';
import {Model} from './model.bazadedate';
import {ProduseService} from '../../services/produse.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {CategorieService} from '../../services/categorie.service';
import {FormControl, FormGroup, NgForm} from '@angular/forms';
@Component({
  selector: 'app-create-model',
  templateUrl: './create-model.component.html',
  styleUrls: ['./create-model.component.css']
})
export class CreateModelComponent implements OnInit {
  mybool: boolean =false;
  modele: Model;
  mod : any[] =[];
  sec:number =3;
  myGroup;
  selectedCategory: string = '1';
  constructor(private prod: ProduseService, private router: Router,private category : CategorieService) { }
  ngOnInit(): void {



    this.category.citestecategory().subscribe( (prod: {count: Number, products: any[]}) => {
      this.mod= prod.products;
      console.log("aici avem din categorie");
      console.warn(this.mod);
    });
    this.myGroup = new FormGroup({
      firstName: new FormControl()
    });
  }


  submitForm(formData :NgForm): void{

    this.prod.scrieinbazadedate2(formData,this.selectedCategory[0]).subscribe(
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
