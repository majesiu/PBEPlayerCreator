import {Component, OnInit} from '@angular/core';
import BattingArchetypes from '../../assets/BattingArchetypes.json';
import FieldingArtchetypes from '../../assets/FieldingArchetypes.json';
import PitchingArtchetypes from '../../assets/PitchingArchetypes.json';
import {Archetype} from '../player-calc/archetype';
import {PitchingArchetype} from '../player-calc/pitching-archetype';
import {Velocity} from '../player-calc/velocity';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {

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

  selectedPitches = ['Pitch 1', 'Pitch 2', 'Pitch 3', 'Pitch 4', 'Pitch 5'];
  pitches = ['Fastball', 'Sinker', 'Cutter', 'Curveball', 'Slider', 'Changeup', 'Splitter', 'Forkball', 'Circle Change',
    'Screwball', 'Knuckle Curve'];
  positions = ['CL', 'SP', 'C', '1B', '2B', '3B', 'SS', 'LF', 'CF', 'RF'];
  startDate = new Date(2007, 0, 1);
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

  earnedBatterTPE = 100;
  earnedPitcherTPE = 100;
  hittingArchetypes: Archetype[];
  selectedHittingArchetype: Archetype;
  fieldingArchetypes: Archetype[];
  selectedFieldingArchetype: Archetype;
  pitchingArchetypes: PitchingArchetype[];
  selectedPitchingArchetype: PitchingArchetype;
  Username = '';
  FirstName = '';
  LastName = '';
  Number = '';
  SelectedPosition = '';
  College = '';
  Birthdate = '';
  Throws = '';
  Recruited = '';
  Height = '';
  Weight = '';
  Birthplace = '';
  Discord = '';
  Hitting: any;
  Bats: any;
  Selected2Position: any;
  Selected3Position: any;
  Selected4Position: any;
  Selected5Position: any;
  batterText = 'Form';

  ngOnInit() {

  }

  copyStringToClipboard(str) {
    // Create new element
    const el = document.createElement('textarea');
    // Set value (string to be copied)
    el.value = str;
    // Set non-editable to avoid focus and move outside of view
    el.setAttribute('readonly', '');
    // @ts-ignore
    el.style = {position: 'absolute', left: '-9999px'};
    document.body.appendChild(el);
    // Select text inside element
    el.select();
    // Copy text to clipboard
    document.execCommand('copy');
    // Remove temporary element
    document.body.removeChild(el);
  }

  createBatter() {
    let formString = '[color=red][u][b]Player Information[/b][/u][/color]';
    if (this.Username === '') {
      return alert('Please input the Username');
    }
    formString += '\n[b]Username:[/b] ' + this.Username;
    if (this.FirstName === '') {
      return alert('Please input the First Name');
    }
    formString += '\n[b]First Name:[/b] ' + this.FirstName;
    if (this.LastName === '') {
      return alert('Please input the Last Name');
    }
    formString += '\n[b]Last Name:[/b] ' + this.LastName;
    if (this.Number === '') {
      return alert('Please input the Number');
    }
    formString += '\n[b]Number:[/b] ' + this.Number;
    if (this.SelectedPosition.length === 0) {
      return alert('Please Select the Position');
    }
    formString += '\n[b]Position:[/b] ' + this.SelectedPosition;
    formString += '\n[b]College:[/b] ' + this.College;
    if (this.Birthdate === '') {
      return alert('Please input the Birthdate of your player');
    }
    formString += '\n[b]Birthdate:[/b] ' + this.Birthdate;
    if (this.Throws.length === 0) {
      return alert('Please select the Throwing Hand');
    }
    formString += '\n[b]Throws:[/b] ' + this.Throws;
    if (this.Bats.length === 0) {
      return alert('Please input the Batting Hand');
    }
    formString += '\n[b]Bats:[/b] ' + this.Bats;
    formString += '\n[b]Recruited by:[/b] ' + this.Recruited;
    if (this.Height === '') {
      return alert('Please input the Height');
    }
    formString += '\n[b]Height:[/b] ' + this.Height;
    if (this.Weight === '') {
      return alert('Please input the Weight');
    }
    formString += '\n[b]Weight:[/b] ' + this.Weight;
    formString += '\n[b]Birthplace:[/b] ' + this.Birthplace;
    formString += '\n[b]Discord name:[/b] ' + this.Discord;
    if (this.Hitting === '') {
      return alert('Please input the Hitting Type');
    }
    formString += '\n[b]Hitting:[/b] ' + this.Hitting;
    formString += '\n\n[color=red][u][b]Hitting Attributes: [/b][/u][/color]';
    if (this.selectedFieldingArchetype !== this.fieldingArchetypes [5]) {
      if (this.selectedFieldingArchetype.costSum() !== 50 || this.selectedHittingArchetype.costSum() !== 50) {
        return alert('You have to spent exactly 50 TPE in each Hitting and Fielding');
      }
    } else if (this.selectedFieldingArchetype.costSum() !== 0 || this.selectedHittingArchetype.costSum() !== 100) {
      return alert('As DH You have to spent exactly 100 starting TPE in Hitting and none in Fielding');
    }
    formString += '\n[b]Hitting Archetype:[/b] ' + this.selectedHittingArchetype.name;
    for (const att of this.selectedHittingArchetype.attributes) {
      formString += '\n(MIN: ' + att.min + ') (MAX: ' + att.max + ') '
        + att.name + ' ' + att.value;
    }
    formString += '\n\n[color=blue][u][b]Fielding Attributes:[/b][/u][/color]';
    formString += '\n[b]Fielding Archetype:[/b] ' + this.selectedFieldingArchetype.name;
    for (const att of this.selectedFieldingArchetype.attributes) {
      formString += '\n(MIN: ' + att.min + ') (MAX: ' + att.max + ') '
        + att.name + ' ' + att.value;
    }
    if (this.SelectedPosition.length === 0) {
      return alert('Please input the Main Position');
    }
    formString += '\n1st Position (200/200 experience): ' + this.SelectedPosition;
    if (this.SelectedPosition.length === 0) {
      return alert('Please input the Secondary Position');
    }
    formString += '\n2nd Position (150/200 experience): ' + this.Selected2Position;
    if (this.SelectedPosition.length === 0) {
      return alert('Please input the Tertiary Position');
    }
    formString += '\n3rd Position (100/200 experience): ' + this.Selected3Position;
    if (this.selectedFieldingArchetype === this.fieldingArchetypes[6]) {
      if (this.SelectedPosition.length === 0) {
        return alert('Please input the 4th Position');
      }
      formString += '\n4th Position (100/200 experience): ' + this.Selected4Position;
      if (this.SelectedPosition.length === 0) {
        return alert('Please input the 5th Position');
      }
      formString += '\n5th Position (100/200 experience): ' + this.Selected5Position;
    }
    this.copyStringToClipboard(formString);
    alert('New thread on forums will open up - template was copied into clipboard, paste it there and create the thread');
    window.open('http://probaseballexperience.jcink.net/index.php?act=Post&CODE=00&f=2');

  }

  createPitcher() { 
    let formString = '[color=red][u][b]Player Information[/b][/u][/color]';
    if (this.Username === '') {
      return alert('Please input the Username');
    }
    formString += '\n[b]Username:[/b] ' + this.Username;
    if (this.FirstName === '') {
      return alert('Please input the First Name');
    }
    formString += '\n[b]First Name:[/b] ' + this.FirstName;
    if (this.LastName === '') {
      return alert('Please input the Last Name');
    }
    formString += '\n[b]Last Name:[/b] ' + this.LastName;
    if (this.Number === '') {
      return alert('Please input the Number');
    }
    formString += '\n[b]Number:[/b] ' + this.Number;
    if (this.SelectedPosition.length === 0) {
      return alert('Please Select the Position');
    }
    formString += '\n[b]Position:[/b] ' + this.SelectedPosition;
    formString += '\n[b]College:[/b] ' + this.College;
    if (this.Birthdate === '') {
      return alert('Please input the Birthdate of your player');
    }
    formString += '\n[b]Birthdate:[/b] ' + this.Birthdate;
    if (this.Throws.length === 0) {
      return alert('Please select the Throwing Hand');
    }
    formString += '\n[b]Throws:[/b] ' + this.Throws;
    formString += '\n[b]Recruited by:[/b] ' + this.Recruited;
    if (this.Height === '') {
      return alert('Please input the Height');
    }
    formString += '\n[b]Height:[/b] ' + this.Height;
    if (this.Weight === '') {
      return alert('Please input the Weight');
    }
    formString += '\n[b]Weight:[/b] ' + this.Weight;
    formString += '\n[b]Birthplace:[/b] ' + this.Birthplace;
    formString += '\n[b]Discord name:[/b] ' + this.Discord;
    formString += '\n\n[color=red][u][b]Pitching Attributes: [/b][/u][/color]';
    if (this.selectedPitchingArchetype.costSum() !== 100) {
      return alert('You have to spent exactly 100 of your initial TPE');
    }
    formString += '\n[b]Player Archetype:[/b] ' + this.selectedPitchingArchetype.name;
    for (const att of this.selectedPitchingArchetype.attributes) {
      formString += '\n(MIN: ' + att.min + ') (MAX: ' + att.max + ') '
        + att.name + ' ' + att.value;
    }
    if (this.selectedPitches[0].startsWith('Pitch') || this.selectedPitches[1].startsWith('Pitch') ||
      this.selectedPitches[2].startsWith('Pitch') ) {
      return alert('Please select your 3 starting pitches');
    }
    formString += '\nPitches: ' + this.selectedPitches[0] + ', ' + this.selectedPitches[1] + ', '
      + this.selectedPitches[2] + ', ' + this.selectedPitches[3];

    this.copyStringToClipboard(formString);
    alert('New thread on forums will open up - template was copied into clipboard, paste it there and create the thread');
    window.open('http://probaseballexperience.jcink.net/index.php?act=Post&CODE=00&f=2');

  }

}
