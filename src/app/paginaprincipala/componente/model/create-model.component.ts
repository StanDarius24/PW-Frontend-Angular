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
    this.modele.name = denumire;
    this.modele.descriere = descriere;
    this.modele.pret = pret;
    this.modele.datalansarii = datalansarii;
    this.modele.categorie = categorie;
    this.modele.picture = link;
    console.warn(denumire);
    console.warn(descriere);
    console.warn(pret);
    console.warn(datalansarii);
    console.warn(categorie);
    console.warn(link);

  }
}
