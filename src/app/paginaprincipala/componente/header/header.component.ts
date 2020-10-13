import { Component, OnInit } from '@angular/core';
import {ProduseService} from '../../services/produse.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  modele: any[]=[];
  product;
  constructor(private produseService: ProduseService, private router: Router) {
  }

  ngOnInit() {
    this.produseService.citesteDinBazaDeDATE().subscribe((prod: {count: Number, products: any[]}) => {
      this.modele = prod.products;

  })}
  logMessage(value: Number){
      this.router.navigate(['/produs', value]).then();
      console.log(value);
  }
  events(text:string){
    console.log(text);
    this.router.navigate(['/products/name/' + text]).then();
  }

}

