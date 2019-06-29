import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  motTab: string[] = ['lourent', 'tullier', 'lézarde', 'aciérez', 'chassât', 'boettez', 'messire', 'branche', 'licteur', 'cémenta'] ;
  cpt: number;
  premierlettre: string;
  grille: string[5][7];
  alphabet: string[] = [];

  constructor() { }

}
