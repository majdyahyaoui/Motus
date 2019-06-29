import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'Alphabet',
  templateUrl: './alphabet.component.html',
  styleUrls: ['./alphabet.component.css']
})
export class AlphabetComponent implements OnInit {
  @Input() data : any ;

  constructor() { }

  ngOnInit() {
  }

}
