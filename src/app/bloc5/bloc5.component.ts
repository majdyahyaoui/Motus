import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'Bloc5',
  templateUrl: './bloc5.component.html',
  styleUrls: ['./bloc5.component.css']
})
export class Bloc5Component implements OnInit {
  @Input() data : any ;

  border : string = "rouge" ;
  constructor() { }

  ngOnInit() {
  }
  // verifierMotaSept(string m){
  //
  // }

  essayer(form : NgForm){
    var essai = form.value.essai ;
    var mot = this.data.motTab[this.data.nbMots] ;
    console.log(mot) ;
    for(var i = 0 ; i < essai.length ;i++){
      if(essai[i] == mot[i]){
        this.data.grille[this.data.nbMots][i][0] = essai[i] ;
        this.data.grille[this.data.nbMots][i][1] = "good" ;
      }
      else if(mot.indexOf(essai[i]) != -1){
        this.data.grille[this.data.nbMots][i][0] = essai[i] ;
        this.data.grille[this.data.nbMots][i][1] = "in" ;
      }
      else{
        this.data.grille[this.data.nbMots][i][0] = essai[i] ;
        this.data.grille[this.data.nbMots][i][1] = "not" ;
      }
    }
    console.log(this.data)

  }

  verifierDictionnaire(){}

  verifierAvantIntroduire(){
    this.verifierDictionnaire();
  }

  introduireMot(){}

  afficherGrille(){
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
