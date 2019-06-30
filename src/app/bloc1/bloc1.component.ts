import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'Bloc1',
  templateUrl: './bloc1.component.html',
  styleUrls: ['./bloc1.component.css']
})
export class Bloc1Component implements OnInit {

  @Output() emetter = new EventEmitter<any>() ;

  constructor(private data: DataService) { }
  motTab: string[];

  ngOnInit() {
    this.motTab = this.data.motTab;
    this.RemplacerCaractere();
    this.InitialiserAlphabet();
  }
  jouer(){
    this.RemplacerCaractere();
    this.InitialiserParametre();
    this.InitialiserSolution();
    this.InitialiserSaisirMots();
    this.InitialiserGrille();
    this.InitialiserAlphabet();
    this.data.start = true ;
    this.emetter.emit(this.data) ;
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
    this.data.temps = 600;
    this.data.tempsParMot = 20;
    this.data.resultatMotReussi = 0;

  }

  InitialiserSolution(){
    this.data.nbMots = 0 ;
  }

  InitialiserSaisirMots() {
    this.data.premierlettre = this.motTab[this.data.nbMots][0];

  }
  InitialiserGrille() {
    this.data.grille[0][0]=[this.data.premierlettre , "good"];
  }

  InitialiserAlphabet() {
    let a: string [][][] = [[['a',"exist"], ['b',"exist"], ['c',"exist"], ['d',"exist"] , ['e',"exist"], ['f',"exist"] ],
      [['g',"exist"], ['h',"exist"], ['i',"exist"], ['j',"exist"] , ['k',"exist"], ['l',"exist"] ],
      [['m',"exist"], ['n',"exist"], ['o',"exist"], ['p',"exist"] , ['q',"exist"], ['r',"exist"] ],
      [['s',"exist"], ['t',"exist"], ['u',"exist"], ['v',"exist"] , ['w',"exist"], ['x',"exist"] ] ,
      [['y',"exist"], ['z',"exist"] ]];
    this.data.alphabet = a;

  }


}
