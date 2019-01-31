import {Component, OnInit} from '@angular/core';
// @ts-ignore
import BattingArchetypes from '../../assets/BattingArchetypes.json';
import FieldingArtchetypes from '../../assets/FieldingArchetypes.json';
import {Archetype} from './archetype';

@Component({
  selector: 'app-player-calc',
  templateUrl: './player-calc.component.html',
  styleUrls: ['./player-calc.component.css']
})
export class PlayerCalcComponent implements OnInit {

  earnedTPE = 100;
  hittingArchetypes: Archetype[];
  selectedHittingArchetype: Archetype;
  fieldingArchetypes: Archetype[];
  selectedFieldingArchetype: Archetype;

  constructor() {

    const temp = new Array<Archetype>();
    for (const entry of BattingArchetypes.Archetypes) {
      const attribute = new Archetype(entry.name, entry.attributes);
      temp.push(attribute);
    }
    this.hittingArchetypes = temp;
    this.selectedHittingArchetype = this.hittingArchetypes[1];
    const temp2 = new Array<Archetype>();
    for (const entry of FieldingArtchetypes.Archetypes) {
      const attribute = new Archetype(entry.name, entry.attributes);
      temp2.push(attribute);
    }
    this.fieldingArchetypes = temp2;
    this.selectedFieldingArchetype = this.fieldingArchetypes[1];
  }

  ngOnInit() {

  }

}
