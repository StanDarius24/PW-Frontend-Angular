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
      name: 'Darius',
      email: 'standarius24@gmail.com',
      picture: 'https://news.theosarc.net/wp-content/uploads/2019/08/cropped-mainsec05.jpg'
    },
    {
      id: 2,
      name: 'Denis',
      email: 'deniszeu23@gmail.com',
      phone: 74534234,
      picture: 'https://i2.wp.com/d2skuhm0vrry40.cloudfront.net/2020/articles/2020-09-01-18-22/digitalfoundry-2020-hands-on-with-nvidia-rtx-3080-1598980952999.jpg/EG11/resize/1200x-1/digitalfoundry-2020-hands-on-with-nvidia-rtx-3080-1598980952999.jpg?ssl=1'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
