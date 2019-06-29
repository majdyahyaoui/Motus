import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'Bloc4',
  templateUrl: './bloc4.component.html',
  styleUrls: ['./bloc4.component.css']
})
export class Bloc4Component implements OnInit {
  @Input() data : any ;

  constructor() { }

  ngOnInit() {
  }
  // finpartielle(){
  //   if (this.data.nbEssais === 5 || this.data.finTempsParMot === 1) {
  //     this.message1 = this.data.motTab[this.data.cpt];
  //
  //   }
  // }
  // finTotale(){
  //   if (this.data.finTemps === 1 || this.data.cpt === 10){
  //     if ( this.data.resultatMotReussi > 6){
  //         this.message2 = 'Bravo!';
  //     }
  //     else{
  //       this.message2 = A la prochaine';
  //     }
  //   }
  //}


}
