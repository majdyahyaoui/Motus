import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-bloc2',
  templateUrl: './bloc2.component.html',
  styleUrls: ['./bloc2.component.css']
})
export class Bloc2Component implements OnInit {
motReussi: number ;
  constructor(private data: DataService, ) { }

  ngOnInit() {
  }
  public incrementerMotsReussi() {
    this.motReussi += 1;
  }
  public decrementerTempsGlobal() {
    setInterval(
      ()=> { this.data.temps--;
      console.log(Math.floor(this.data.temps / 60)+':'+Math.floor(this.data.temps % 60)); }, 1 * 1000);
    this.data.finTemps = 1;
  }

}
