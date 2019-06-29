import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {forEach} from '@angular/router/src/utils/collection';


@Component({
  selector: 'Bloc5',
  templateUrl: './bloc5.component.html',
  styleUrls: ['./bloc5.component.css']
})
export class Bloc5Component implements OnInit {
  @Input() data : any ;
  @Output() emetter5 = new EventEmitter<any>() ;

  border : string = "rouge" ;
  constructor() { }

  ngOnInit() {
  }
  // verifierMotaSept(string m){
  //
  // }
  essayer(form : NgForm){
    var essai = form.value.essai ;
    if (!(this.data.nbMots == 9 && this.data.nbEssais == 4 || this.data.nbMots == 10 && this.data.motActuelle == this.data.motTab[9] )){
      this.data.nbEssais ++ ;
      this.afficherGrille(essai);

    }else{

      if(this.data.resultatMotReussi >= 7){
        alert("BRAVO")
      }
      else(alert("A LA PROCHAINE"))
    }
    this.emetter5.emit(this.data) ;


  }

  afficherGrille(essai : string){
    var mot = this.data.motTab[this.data.nbMots] ;
    if(essai == mot){
      this.data.nbMots ++ ;
      this.data.resultatMotReussi ++ ;
      this.initGrille() ;
      this.initAlph() ;
      this.data.nbEssais = 0 ;
      this.data.motActuelle = mot ;
      console.log(this.data.motActuelle)
      console.log(this.data.motTab[9])
    }
    else if(this.data.nbEssais == 5){
      this.data.nbMots ++ ;
      this.data.nbEssais = 0 ;
      this.initGrille() ;
      this.initAlph() ;
      this.data.motActuelle = mot ;
    }
    else{
      for(var i = 0 ; i < essai.length ;i++){
        if(essai[i] == mot[i]){
          this.data.grille[this.data.nbEssais][i][0] = essai[i] ;
          this.data.grille[this.data.nbEssais][i][1] = "good" ;
          this.data.alphabet.forEach(
            function(value) {
              value.forEach(function(value) {
                if(value[0]== essai[i]){
                  value[1] = "inclue"}})})
        }
        else if(mot.indexOf(essai[i]) != -1){
          this.data.grille[this.data.nbEssais][i][0] = essai[i] ;
          this.data.grille[this.data.nbEssais][i][1] = "in" ;
          this.data.alphabet.forEach(
            function(value) {
              value.forEach(function(value) {
                if(value[0]== essai[i]){
                  value[1] = "inclue"}})})
        }
        else{
          this.data.grille[this.data.nbEssais][i][0] = essai[i] ;
          this.data.grille[this.data.nbEssais][i][1] = "not" ;
          this.data.alphabet.forEach(
            function(value) {
              value.forEach(function(value) {
                if(value[0]== essai[i]){
                  value[1] = "notExist"}})})
        }
      }
    }


  }

  verifierDictionnaire(){}

  verifierAvantIntroduire(){
    this.verifierDictionnaire();
  }

  introduireMot(){}

  initGrille(){
    this.data.grille = [[["",""],["",""],["",""],["",""],["",""],["",""],["",""]],[["",""],["",""],["",""],["",""],["",""],["",""],["",""]]
      ,[["",""],["",""],["",""],["",""],["",""],["",""],["",""]] ,[["",""],["",""],["",""],["",""],["",""],["",""],["",""]]
      ,[["",""],["",""],["",""],["",""],["",""],["",""],["",""]]];
    this.data.premierlettre = this.data.motTab[this.data.nbMots][0];
    this.data.grille[0][0]=[this.data.premierlettre , "good"];

  }

  initAlph(){
    this.data.alphabet = [[['a',"exist"], ['b',"exist"], ['c',"exist"], ['d',"exist"] , ['e',"exist"], ['f',"exist"] ],
      [['g',"exist"], ['h',"exist"], ['i',"exist"], ['j',"exist"] , ['k',"exist"], ['l',"exist"] ],
      [['m',"exist"], ['n',"exist"], ['o',"exist"], ['p',"exist"] , ['q',"exist"], ['r',"exist"] ],
      [['s',"exist"], ['t',"exist"], ['u',"exist"], ['v',"exist"] , ['w',"exist"], ['x',"exist"] ] ,
      [['y',"exist"], ['z',"exist"] ]];
  }

  verifierMotaSept(input : any){
    if(input.value.length == 7){
      this.border = "vert" ;
    }
    else{
      this.border = "rouge" ;
    }
  }
}
