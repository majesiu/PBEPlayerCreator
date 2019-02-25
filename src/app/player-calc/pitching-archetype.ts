import {Archetype} from './archetype';
import {Attribute} from './attribute';
import {Velocity} from './velocity';

export class PitchingArchetype extends Archetype {
  constructor(name: string, attributes: Attribute[], velocity: Velocity) {
    super(name, attributes);
    this.velocity = velocity;
  }
  name: string;
  attributes: Attribute[];
  velocity: Velocity;

  costSum(): number {
    let acc = 0;
    this.attributes.forEach(value => acc += value.cost());
    acc += this.velocity.cost();
    return acc;
  }
}
