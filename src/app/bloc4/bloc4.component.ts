import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'Bloc4',
  templateUrl: './bloc4.component.html',
  styleUrls: ['./bloc4.component.css']
})
export class Bloc4Component implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit() {
  }


}
