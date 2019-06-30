import {AfterViewInit, Component, Input, OnChanges, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'Bloc2',
  templateUrl: './bloc2.component.html',
  styleUrls: ['./bloc2.component.css']
})
export class Bloc2Component implements OnInit ,OnChanges{
  temps : string ;
  @Input() data : any ;
  constructor( ) { }

  ngOnInit(): void {

  }

  ngOnChanges(){
    this.decrementerTempsGlobal(this.data.temps)
    this.fin(this.data.resultatMotReussi)

  }

  incrementerMotsReussi() {
    // this.motReussi += 1;
  }
  decrementerTempsGlobal(temps : number)  {

    setInterval(
      ()=> {
        temps--;
      this.temps = Math.floor(temps / 60)+':'+Math.floor(temps % 60) ;
      },
      1 * 1000);
  }

  fin(nb : number){
    setTimeout(function(){
      if( nb >= 7){
        alert("BRAVO");
      }
      else{
        alert("A LA PROCHAINE")
      }
    }, 600000);
  }




}
