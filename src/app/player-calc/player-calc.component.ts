import { Component, OnInit } from '@angular/core';
import {Attribute} from './attribute';

@Component({
  selector: 'app-player-calc',
  templateUrl: './player-calc.component.html',
  styleUrls: ['./player-calc.component.css']
})
export class PlayerCalcComponent implements OnInit {

  attribute: Attribute = new Attribute('Test', 25, 50, 50);

  constructor() { }

  ngOnInit() {
  }

}
