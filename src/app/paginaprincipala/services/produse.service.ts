import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProduseService {
  private SERVER = environment.SERVER;
  constructor(private http: HttpClient) { }
  citesteDinBazaDeDATE(numberres:number = 10)
  {
  return this.http.get(this.SERVER + '/products',{
    params:{
    limit:numberres.toString()}
  });

  }
}
