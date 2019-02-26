import {Attribute} from './attribute';

export class Archetype {
  name: string;
  attributes: Attribute[];
  constructor(name: string, attributes: any[]) {
    this.name = name;
    const temp = new Array<Attribute>();
    for (const entry of attributes) {
      const attribute = new Attribute(entry.name, entry.min, entry.max);
      temp.push(attribute);
    }
    this.attributes = temp;
  }

  costSum(): number {
    let acc = 0;
    this.attributes.forEach(value => acc += value.cost())
    return acc;
  }
  costBase(): number {
    let acc = 0;
    this.attributes.forEach(value => acc += value.baseCost())
    return acc;
  }
}
