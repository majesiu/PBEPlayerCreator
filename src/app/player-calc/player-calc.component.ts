import { Component, OnInit } from '@angular/core';
// @ts-ignore
import BattingArchetypes from '../../assets/BattingArchetypes.json';
import {Archetype} from './archetype';

@Component({
  selector: 'app-player-calc',
  templateUrl: './player-calc.component.html',
  styleUrls: ['./player-calc.component.css']
})
export class PlayerCalcComponent implements OnInit {

   hittingArchetypes: Archetype[];
   selectedHittingArchetype: Archetype;

  constructor() {

    const temp = new Array<Archetype>();
    for (const entry of BattingArchetypes.Archetypes) {
      const attribute = new Archetype(entry.name, entry.attributes);
      temp.push(attribute);
    }
    this.hittingArchetypes = temp;
    this.selectedHittingArchetype = this.hittingArchetypes[1];
  }

  ngOnInit() {

  }

}
