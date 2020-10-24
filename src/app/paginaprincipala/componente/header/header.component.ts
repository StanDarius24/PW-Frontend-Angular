import { Component, OnInit } from '@angular/core';
import {ProduseService} from '../../services/produse.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {CategorieService} from '../../services/categorie.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  selectedCategory: string = '';
  modele: any[]=[];
  product;
  catego;
  constructor(private produseService: ProduseService, private router: Router,private category : CategorieService ) {
  }

  ngOnInit() {
  this.category.citestecategory().subscribe( (prod: {count: Number, products: any[]}) => {
    this.modele= prod.products;
    console.log("aici avem din categorie");
    console.warn(this.modele);
  })

  }

  submit(event: any){

    this.selectedCategory=event.target.value;
    console.log(this.selectedCategory);
    this.router.navigate(['/categorie/', this.selectedCategory]).then();
  }



  /*
  dupa id
  logMessage(value: Number){
      this.router.navigate(['/produs', value]).then();
      console.log(value);
  }*/
  events(text:string){
    console.log(text);
    this.router.navigate(['/search/',text]).then();
  }

}

