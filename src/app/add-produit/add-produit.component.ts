import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { Router } from '@angular/router';
import { Categorie } from '../model/categorie.model';
import { CategorieService } from '../services/categorie.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrl: './add-produit.component.css'
})
export class AddProduitComponent implements OnInit {
  newProduit = new Produit();
  categories ?: Categorie[];
  newCategorie = new Categorie();
  newIdCat ?: number;
  constructor(private produitService : ProduitService , private router : Router, private categorieService : CategorieService){
  }
  ngOnInit(): void {
    this.categorieService.listeCategories().
    subscribe(cats => {this.categories = cats;
    console.log(cats);
    
    });
    }
  addProduit(){
    this.produitService.ajouterProduit(this.newProduit)
    .subscribe(prod => {
    console.log(prod);
    this.router.navigate(['produits']);
      });
    } 
/*
    addProduit(){
      this.newProduit.categorie = this.categories.find(cat => cat.idCat == this.newIdCat)!;
      this.produitService.ajouterProduit(this.newProduit)
      .subscribe(prod => {
      console.log(prod);
      this.router.navigate(['produits']);
      });
      
      } */ 
  }


