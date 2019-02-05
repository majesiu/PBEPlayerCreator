export class Attribute {
  readonly name: string;
  readonly min: number;
  readonly max: number;
  value: number;


  constructor(name: string, min: number, max: number) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.value = ['Pitch 4:', 'Pitch 5:'].includes(this.name) ? 0 : this.min;
  }

  /* 1-40: 1 TPE Per Point
    40-50: 2 TPE Per Point
    50-60: 3 TPE Per Point
    60-70: 4 TPE Per Point
    70-80: 6 TPE Per Point
    80-90: 7 TPE Per Point
   90-115: 8 TPE Per Point*/
  cost(): number {
    if (this.value === 0) { return 0; }
    const minCost = this.min <= 40 ? this.min : this.min <= 50 ? 40 + 2 * (this.min - 40) : this.min <= 60 ? 60 + 3 * (this.min - 50) :
                  this.min <= 70 ? 90 + 4 * (this.min - 60) : this.min <= 80 ? 130 + 6 * (this.min - 70) : this.min <= 90 ?
                  190 + 7 * (this.min - 80) : 260 + 8 * (this.min - 90);
    const valueCost = this.value <= 40 ? this.value : this.value <= 50 ? 40 + 2 * (this.value - 40) : this.value <= 60 ? 60 + 3 *
                    (this.value - 50) : this.value <= 70 ? 90 + 4 * (this.value - 60) : this.value <= 80 ? 130 + 6 *
                    (this.value - 70) : this.value <= 90 ? 190 + 7 * (this.value - 80) : 260 + 8 * (this.value - 90);
    return valueCost - minCost + (['Pitch 4:', 'Pitch 5:'].includes(this.name) ? 50 : 0);

  }
}
