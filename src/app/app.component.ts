import {Component, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'Tsunami-IT',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Motus';
  data : any ;
  change(data : any){
    this.data = data ;
  }
}
