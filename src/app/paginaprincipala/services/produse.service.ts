import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Model} from '../componente/model/model.bazadedate';

@Injectable({
  providedIn: 'root'
})
export class ProduseService {
  private SERVER = environment.SERVER;
  constructor(private http: HttpClient) { }
  citesteDinBazaDeDATE(numberres: number = 14)
  {
  return this.http.get(this.SERVER + '/products',{
    params:{
    limit:numberres.toString()}
  });

  }
  getSingleProduct(id: number): Observable<any> {
    return this.http.get<Model>(this.SERVER + '/products/' + id);
  }

  getProductFromCategory(catName: string) : Observable<any[]>{
  return this.http.get<any>(this.SERVER + '/products/category' + catName);
}
  getSingleProductbyname(text : string): Observable<any> {
    console.log(text);
    return this.http.get<any>(this.SERVER + '/products/name/' + text);
  }

  scrieinbazadedate(formdata){
    return this.http.post<any>(this.SERVER + '/products/list' ,formdata);
  }
}
