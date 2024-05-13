import { Injectable } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { CaaRecord } from 'dns';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};
@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  apiURL: string = 'http://localhost:8082/produits/api/catergorie';
  categorie! : Categorie;
  categories ?: Categorie[];
  constructor(private http : HttpClient) { }

  listeCategories(): Observable<Categorie[]>{
    return this.http.get<Categorie[]>(this.apiURL+"/cat")
  }
  
/*  consulterCategorie(): Categorie{
    return this.categorie.find(cat => cat.idCat)
  }*/
} 


