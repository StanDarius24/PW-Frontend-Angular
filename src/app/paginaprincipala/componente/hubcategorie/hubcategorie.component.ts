import { Component, OnInit } from '@angular/core';
import {ProduseService} from '../../services/produse.service';
import {Router} from '@angular/router';
import {CategorieService} from '../../services/categorie.service';

@Component({
  selector: 'app-hubcategorie',
  templateUrl: './hubcategorie.component.html',
  styleUrls: ['./hubcategorie.component.css']
})
export class HubcategorieComponent implements OnInit {
  modele: any[] = [];
  mybool: boolean =false;
  sec:number=3;
  constructor(private categ :CategorieService ,private router: Router) { }

  ngOnInit(): void {
    this.categ.citestecategory().subscribe((prod: {count: Number, products: any[]}) => {
      this.modele = prod.products;
      console.log(this.modele);

    } )
  }

  stergere(id:number){
    console.log(id + "Stergere reusita");
    this.categ.stergedupaIdcategorie(id).subscribe(
      res => {
        console.log(res);
      }
    );
    this.mybool=true;
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

submitForm(val)
{
  console.log(val);
  console.log(val.name);
  if(val.name!='')
  this.categ.scrieinbazacategorie(val).subscribe(
    res => {
      console.log(res);
    }
  );
}
submitEdit(val)
{
this.router.navigate(['/editcategory',val]).then();

}

}
