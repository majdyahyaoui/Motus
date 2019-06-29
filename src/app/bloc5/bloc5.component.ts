import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'Bloc5',
  templateUrl: './bloc5.component.html',
  styleUrls: ['./bloc5.component.css']
})
export class Bloc5Component implements OnInit {
  @Input() data : any ;
  essai : String ="" ;
  constructor() { }

  ngOnInit() {
  }
  // verifierMotaSept(string m){
  //
  // }

  envoyer(){

  }
}
