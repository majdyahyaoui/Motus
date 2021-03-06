import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  start = false ;
  motTab: string[] = ['lourent', 'tullier', 'lézarde', 'aciérez', 'chassât', 'boettez', 'messire', 'branche', 'licteur', 'cementa' ,''] ;
  motActuelle ="" ;
  premierlettre: string;
  grille = [[["",""],["",""],["",""],["",""],["",""],["",""],["",""]],[["",""],["",""],["",""],["",""],["",""],["",""],["",""]]
          ,[["",""],["",""],["",""],["",""],["",""],["",""],["",""]] ,[["",""],["",""],["",""],["",""],["",""],["",""],["",""]]
          ,[["",""],["",""],["",""],["",""],["",""],["",""],["",""]]];
  alphabet: string[][][] ;
  temps: number;
  tempsParMot: number;
  resultatMotReussi: number;
  finTemps: number;
  finTempsParMot: number;
  nbEssais: number =0;
  nbMots : number = 0;

  constructor() { }

}
