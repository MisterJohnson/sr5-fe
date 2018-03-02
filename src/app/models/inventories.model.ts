class Inventory {
  _id: string;
  ranged_weapons: Object[];
  melee_weapons: Object[];
  gears: Object[];
  armors: Object[];
  matrix_gears: Object[];
  magical_gears: Object[];

  constructor() {
    this.ranged_weapons = [];
    this.melee_weapons = [];
    this.gears = [];
    this.armors = [];
    this.matrix_gears = [];
    this.magical_gears = [];
  }
}
