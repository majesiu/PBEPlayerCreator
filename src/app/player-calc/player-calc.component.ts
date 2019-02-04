import {Component, OnInit} from '@angular/core';
// @ts-ignore
import BattingArchetypes from '../../assets/BattingArchetypes.json';
import FieldingArtchetypes from '../../assets/FieldingArchetypes.json';
import PitchingArtchetypes from '../../assets/PitchingArchetypes.json';
import {Archetype} from './archetype';
import {PitchingArchetype} from './pitching-archetype';
import {Velocity} from './velocity';

@Component({
  selector: 'app-player-calc',
  templateUrl: './player-calc.component.html',
  styleUrls: ['./player-calc.component.css']
})
export class PlayerCalcComponent implements OnInit {

  constructor() {

    const temp = new Array<Archetype>();
    for (const entry of BattingArchetypes.Archetypes) {
      const archetype = new Archetype(entry.name, entry.attributes);
      temp.push(archetype);
    }
    this.hittingArchetypes = temp;
    this.selectedHittingArchetype = this.hittingArchetypes[1];
    const temp2 = new Array<Archetype>();
    for (const entry of FieldingArtchetypes.Archetypes) {
      const archetype = new Archetype(entry.name, entry.attributes);
      temp2.push(archetype);
    }
    this.fieldingArchetypes = temp2;
    this.selectedFieldingArchetype = this.fieldingArchetypes[1];

    const temp3 = new Array<PitchingArchetype>();
    for (const entry of PitchingArtchetypes.Archetypes) {
      // @ts-ignore
      const archetype = new PitchingArchetype(entry.name, entry.attributes.slice(1),
        new Velocity(entry.attributes[0].name, entry.attributes[0].min.toString(), entry.attributes[0].max.toString()));
      temp3.push(archetype);
    }
    this.pitchingArchetypes = temp3;
    this.selectedPitchingArchetype = this.pitchingArchetypes[0];
  }
  public velocityValues = ['80 - 83',
    '83 - 85',
    '84 - 86',
    '85 - 87',
    '86 - 88',
    '87 - 89',
    '88 - 90',
    '89 - 91',
    '90 - 92',
    '91 - 93',
    '92 - 94',
    '93 - 95',
    '94 - 96',
    '95 - 97',
    '96 - 98',
    '97 - 99',
    '98 - 100',
    '99 - 101',
    '100'];

  earnedTPE = 100;
  hittingArchetypes: Archetype[];
  selectedHittingArchetype: Archetype;
  fieldingArchetypes: Archetype[];
  selectedFieldingArchetype: Archetype;
  pitchingArchetypes: PitchingArchetype[];
  selectedPitchingArchetype: PitchingArchetype;

  ngOnInit() {

  }

}
