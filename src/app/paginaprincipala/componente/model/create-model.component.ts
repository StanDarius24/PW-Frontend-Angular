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
  mybool: boolean =false;
  modele: Model;
  sec:number =3;
  constructor(private prod: ProduseService, private router: Router) { }
  ngOnInit(): void {
  }

  submitForm(formData): void{
    console.log(formData);
    this.prod.scrieinbazadedate(formData).subscribe(
      res => {
        console.log(res);
      }
    );
    this.mybool =true;
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



}
