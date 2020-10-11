import { Component, OnInit } from '@angular/core';
import {Model} from '../model.bazadedate';
import {ProduseService} from '../../../services/produse.service';

@Component({
  selector: 'app-lista-componente',
  templateUrl: './lista-model.component.html',
  styleUrls: ['./lista-model.component.css']
})

export class ListaModelComponent implements OnInit {
  constructor(private produseService: ProduseService) {

  }
  modele: any[] = [];


  ngOnInit(): void {
  this.produseService.citesteDinBazaDeDATE().subscribe(prod => {
    console.log(prod);
  })
  }

}
