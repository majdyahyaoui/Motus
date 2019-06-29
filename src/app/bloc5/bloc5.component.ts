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
    this.afficherGrille(essai);
    this.data.nbEssais ++ ;
    this.emetter5.emit(this.data) ;
  }

  afficherGrille(essai : string){
    var mot = this.data.motTab[this.data.nbMots] ;
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

  verifierDictionnaire(){}

  verifierAvantIntroduire(){
    this.verifierDictionnaire();
  }

  introduireMot(){}


  verifierMotaSept(input : any){
    if(input.value.length == 7){
      this.border = "vert" ;
    }
    else{
      this.border = "rouge" ;
    }
  }
}
