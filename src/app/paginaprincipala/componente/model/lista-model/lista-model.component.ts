import { Component, OnInit } from '@angular/core';
import {Model} from '../model.bazadedate';

@Component({

  templateUrl: './lista-model.component.html',
  styleUrls: ['./lista-model.component.css']
})

export class ListaModelComponent implements OnInit {
  modele: Model[] = [
    {
      id: 1,
      name: 'Placa de baza Aorus X570',
      descriere: 'Cea mai tare placa de baza',
      pret: 1150,
      datalansarii: new Date( 2019, 5, 15),
      categorie: 'Placa de baza',
      picture: 'https://news.theosarc.net/wp-content/uploads/2019/08/cropped-mainsec05.jpg'
    },
    {
      id: 2,
      name: 'Placa video RTX 3080',
      descriere: 'Cea mai tare placa video',
      pret: 3050,
      datalansarii: new Date( 2018, 5, 13),
      categorie: 'Placa video',
      picture: 'https://i2.wp.com/d2skuhm0vrry40.cloudfront.net/2020/articles/2020-09-01-18-22/digitalfoundry-2020-hands-on-with-nvidia-rtx-3080-1598980952999.jpg/EG11/resize/1200x-1/digitalfoundry-2020-hands-on-with-nvidia-rtx-3080-1598980952999.jpg?ssl=1'
    },
    {
      id: 2,
      name: 'Placa video RTX 3080',
      descriere: 'Cea mai tare placa video',
      pret: 3050,
      datalansarii: new Date( 2018, 5, 13),
      categorie: 'Placa video',
      picture: 'https://playtech.ro/wp-content/uploads/2017/05/amd-ryzen-1170x644.jpg'
    },
    {
      id: 2,
      name: 'Placa video RTX 3080',
      descriere: 'Cea mai tare placa video',
      pret: 3050,
      datalansarii: new Date( 2018, 5, 13),
      categorie: 'Placa video',
      picture: 'https://s.cel.ro/images/mari/kit-memorie-corsair-vengeance-rgb-pro-2-x-16gb-ddr4-3200mhz-c16.jpg'
    },
    {
      id: 2,
      name: 'Placa video RTX 3080',
      descriere: 'Cea mai tare placa video',
      pret: 3050,
      datalansarii: new Date( 2018, 5, 13),
      categorie: 'Placa video',
      picture: 'https://s13emagst.akamaized.net/products/14262/14261631/images/res_e6998388d334a3d9f85b6eb1fb4b4049.jpg'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
