import { Component, OnInit } from '@angular/core';
import {ProduseService} from '../../services/produse.service';

@Component({
  selector: 'app-editare',
  templateUrl: './editare.component.html',
  styleUrls: ['./editare.component.css']
})
export class EditareComponent implements OnInit {

  constructor(private produseServicii: ProduseService) { }
  modele: any[] =[];
  ngOnInit(): void {
    this.produseServicii.citesteDinBazaDeDATE().subscribe((prod: {count: Number, products: any[]}) => {
      this.modele = prod.products;
      console.log(this.modele);
    } )
  }
  submitForm(model)
  {
    console.log(model);
    this.produseServicii.editeazadupaNume(model).subscribe(
      res => {
        console.log(res);
      }
    );
  }
}
