import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Model} from '../componente/model/model.bazadedate';

@Injectable({
  providedIn: 'root'
})

export class CategorieService {
  private SERVER = environment.SERVER;

  constructor(private http: HttpClient) {
  }
  citestecategory(numberres: number = 14) {
    return this.http.get(this.SERVER + '/categorie',{
      params:{
        limit:numberres.toString()}

  });
  }
  getSinglecategory(id: number): Observable<any> {
    return this.http.get<Model>(this.SERVER + '/categorie/' + id);
  }
  scrieinbazacategorie(formdata){
    return this.http.post<any>(this.SERVER + '/categorie/list' ,formdata);
  }
  stergedupaIdcategorie(id: number): Observable<any>{
    console.log("Stergere cu " + id);
    return this.http.delete<any>(this.SERVER + '/categorie/sterge/' + id);
  }
  editeazadupaCategorie(formdata){
    return this.http.put(this.SERVER + '/categorie/editare/nume' ,formdata);
  }
}
