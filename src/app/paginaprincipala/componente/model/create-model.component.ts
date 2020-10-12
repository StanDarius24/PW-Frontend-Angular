import { Component, OnInit } from '@angular/core';
import {Model} from './model.bazadedate';
import {ProduseService} from '../../services/produse.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-create-model',
  templateUrl: './create-model.component.html',
  styleUrls: ['./create-model.component.css']
})
export class CreateModelComponent implements OnInit {

  modele: Model;
  constructor(private produseService: ProduseService, private router: Router) { }
  ngOnInit(): void {
  }
  getVal( denumire , descriere , pret , datalansarii , categorie , link ): void
  {
    this.modele.name=denumire;
    this.modele.picture=link;
    this.modele.datalansarii=datalansarii;
    this.modele.pret=pret;
    this.modele.categorie=categorie;


  }
}
