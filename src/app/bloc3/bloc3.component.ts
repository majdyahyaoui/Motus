import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-bloc3',
  templateUrl: './bloc3.component.html',
  styleUrls: ['./bloc3.component.css']
})
export class Bloc3Component implements OnInit {

  constructor(private data: DataService,) { }

  ngOnInit() {
  }
  public decrementerTempsParMot() {
    setInterval(
      ()=> { this.data.tempsParMot--;
        console.log(Math.floor(this.data.tempsParMot % 60)); }, 1 * 1000);
    this.data.finTempsParMot = 1;
  }
}
