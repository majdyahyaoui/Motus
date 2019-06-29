import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'Bloc3',
  templateUrl: './bloc3.component.html',
  styleUrls: ['./bloc3.component.css']
})
export class Bloc3Component implements OnInit {
  @Input() data : any ;
  constructor() { }

  ngOnInit() {
  }
  public decrementerTempsParMot() {
    // setInterval(
    //   ()=> { this.data.tempsParMot--;
    //     console.log(Math.floor(this.data.tempsParMot % 60)); }, 1 * 1000);
    // this.data.finTempsParMot = 1;
  }
}
