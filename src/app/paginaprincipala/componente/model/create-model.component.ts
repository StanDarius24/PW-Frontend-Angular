import { Component, OnInit } from '@angular/core';
import {Model} from './model.bazadedate';
import {ProduseService} from '../../services/produse.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-create-model',
  templateUrl: './create-model.component.html',
  styleUrls: ['./create-model.component.css']
})
export class CreateModelComponent implements OnInit {

  modele: Model;
  constructor(private prod : ProduseService) { }
  ngOnInit(): void {
  }

  submitForm(formData) :void{
    console.log(formData);
    this.prod.scrieinbazadedate(formData).subscribe(
      res => {
        console.log(res);
      }
    );
  }
}
