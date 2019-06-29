import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  start = false ;
  motTab: string[] = ['lourent', 'tullier', 'lézarde', 'aciérez', 'chassât', 'boettez', 'messire', 'branche', 'licteur', 'cémenta'] ;
  cpt: number;
  premierlettre: string;
  grille = [[["",""],["",""],["",""],["",""],["",""],["",""],["",""]],[["",""],["",""],["",""],["",""],["",""],["",""],["",""]]
          ,[["",""],["",""],["",""],["",""],["",""],["",""],["",""]] ,[["",""],["",""],["",""],["",""],["",""],["",""],["",""]]
          ,[["",""],["",""],["",""],["",""],["",""],["",""],["",""]]];
  alphabet: string[] = [];
  temps: number;
  tempsParMot: number;
  resultatMotReussi: number;
  finTemps: number;
  finTempsParMot: number;
  nbEssais: number;
  nbMots : number = 0;

  constructor() { }

}
