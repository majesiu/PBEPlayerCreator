export class Velocity {
  readonly name: string;
  readonly min: string;
  readonly max: string;
  value: string;


  constructor(name: string, min: string, max: string) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.value = min;
  }

  /*80 - 83 Cost for next level: 30 TPE
  83 - 85 Cost for next level: 30 TPE
  84 - 86 Cost for next level: 30 TPE
  85 - 87 Cost for next level: 30 TPE
  86 - 88 Cost for next level: 30 TPE
  87 - 89 Cost for next level: 30 TPE
  88 - 90 Cost for next level: 30 TPE
  89 - 91 Cost for next level: 50 TPE
  90 - 92 Cost for next level: 50 TPE
  91 - 93 Cost for next level: 50 TPE
  92 - 94 Cost for next level: 50 TPE
  93 - 95 Cost for next level: 50 TPE
  94 - 96 Cost for next level: 50 TPE
  95 - 97 Cost for next level: 75 TPE
  96 - 98 Cost for next level: 75 TPE
  97 - 99 Cost for next level: 75 TPE
  98 - 100 Cost for next level: 75 TPE
  99 - 101 Cost for next level: 75 TPE
  100+ Max level*/
  private static veloValue(velo: String): number {
    switch (velo) {
      case '80 - 83':
        return 0;
        break;
      case '83 - 85':
        return 30;
        break;
      case '84 - 86':
        return 60;
        break;
      case '85 - 87':
        return 90;
        break;
      case '86 - 88':
        return 120;
        break;
      case '87 - 89':
        return 150;
        break;
      case '88 - 90':
        return 180;
        break;
      case '89 - 91':
        return 210;
        break;
      case '90 - 92':
        return 260;
        break;
      case '91 - 93':
        return 310;
        break;
      case '92 - 94':
        return 360;
        break;
      case '93 - 95':
        return 410;
        break;
      case '94 - 96':
        return 460;
        break;
      case '95 - 97':
        return 510;
        break;
      case '96 - 98':
        return 585;
        break;
      case '97 - 99':
        return 660;
        break;
      case '98 - 100':
        return 735;
        break;
      case '99 - 101':
        return 810;
        break;
      case '100':
        return 885;
        break;
    }
  }

  cost(): number {
    return Velocity.veloValue(this.value) - Velocity.veloValue(this.min);
  }
}
