import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'Bloc1',
  templateUrl: './bloc1.component.html',
  styleUrls: ['./bloc1.component.css']
})
export class Bloc1Component implements OnInit {

  constructor(private data: DataService) { }
  // motTab: string[] = ['lourent', 'tullier', 'lézarde', 'aciérez', 'chassât', 'boettez', 'messire', 'branche', 'licteur', 'cémenta'] ;
  motTab: string[];

  ngOnInit() {
    this.motTab = this.data.motTab;
    this.RemplacerCaractere();
    console.log(this.motTab);
    this.InitialiserAlphabet();
    console.log(this.data.alphabet);
  }
  jouer(){
    this.RemplacerCaractere();
    this.InitialiserParametre();
    this.InitialiserSolution();
    this.InitialiserSaisirMots();
    this.InitialiserGrille();
    this.InitialiserAlphabet();
  }

  RemplacerCaractere() {

    for (var i = 0; i < this.motTab.length; i++) {
      let mot: string = '';
      for (var j = 0; j < this.motTab[i].length; j++ ) {
        if ((this.motTab[i][j] === 'é' ) || (this.motTab[i][j] === mot + 'è' ) ) { mot = mot + 'e'; }
        else if ((this.motTab[i][j] === 'à' || this.motTab[i][j] === 'â' ) ) { mot = mot + 'a'; }
        else {mot = mot + this.motTab[i][j]; }


      }
      this.motTab[i] = mot;
    }
  }

  InitialiserParametre() {
    let temps: 600;
    let tempsParMot: 20;
    let resultatMotReussi = 0;
  }

  InitialiserSolution(){
    this.data.cpt = 0 ;
  }
  InitialiserSaisirMots() {
    this.data.premierlettre = this.motTab[this.data.cpt][0];
  }
  InitialiserGrille() {
    this.data.grille.replace(this.data.grille[0][0],this.data.premierlettre);
  }
  InitialiserAlphabet() {
    let a: string [] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    this.data.alphabet = a;

  }


}
