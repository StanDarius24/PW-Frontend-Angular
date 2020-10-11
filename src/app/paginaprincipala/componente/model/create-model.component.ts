import { Component, OnInit } from '@angular/core';
import {Model} from './model.bazadedate';

@Component({
  selector: 'app-create-model',
  templateUrl: './create-model.component.html',
  styleUrls: ['./create-model.component.css']
})
export class CreateModelComponent implements OnInit {

  modele: Model;
  constructor() { }
  ngOnInit(): void {
  }
  getVal( denumire , descriere , pret , datalansarii , categorie , link ): void
  {
    console.warn(denumire,descriere,pret,datalansarii,categorie,link);

  }
}
