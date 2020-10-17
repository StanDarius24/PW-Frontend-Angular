import { Component, OnInit } from '@angular/core';
import {ProduseService} from '../../services/produse.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-editare',
  templateUrl: './editare.component.html',
  styleUrls: ['./editare.component.css']
})
export class EditareComponent implements OnInit {

  constructor(private produseServicii: ProduseService,private router: Router) { }
  modele: any[] =[];
  mybool: boolean = false;
  sec:number = 3;
  ngOnInit(): void {
    this.produseServicii.citesteDinBazaDeDATE().subscribe((prod: {count: Number, products: any[]}) => {
      this.modele = prod.products;
      console.log(this.modele);
    } )
  }
  submitForm(id)
  {
    this.mybool = true;
    setTimeout(() =>
      {
        this.sec= this.sec -1;
        setTimeout(() =>
          {
            this.sec= this.sec -1;
            setTimeout(() =>
              {
                this.sec= this.sec -1;
                this.router.navigate(['/editare/' +id]).then();
              },
              1000);
          },
          1000);
      },
      1000);
  }

}
