import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'Grille',
  templateUrl: './grille.component.html',
  styleUrls: ['./grille.component.css']
})
export class GrilleComponent implements OnInit  {

  @Input() data : any ;
  constructor() { }


  ngOnInit() {

  }

}
