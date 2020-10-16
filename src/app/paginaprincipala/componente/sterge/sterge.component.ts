import { Component, OnInit } from '@angular/core';
import {ProduseService} from '../../services/produse.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sterge',
  templateUrl: './sterge.component.html',
  styleUrls: ['./sterge.component.css']
})
export class StergeComponent implements OnInit {
  modele: any[] = [];
  constructor(private produseServicii: ProduseService,private router: Router) { }

  ngOnInit(): void {this.produseServicii.citesteDinBazaDeDATE().subscribe((prod: {count: Number, products: any[]}) => {
    this.modele = prod.products;
    console.log(this.modele);

  } )

  }

  stergere(id:number){
    console.log(id + "Stergere reusita");
    this.produseServicii.stergedupaId(id).subscribe(
      res => {
        console.log(res);
      }
    );
  }

}
