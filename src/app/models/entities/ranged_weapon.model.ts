class RangedWeapon extends Base {
  type: string;
  related_skill: string;
  mode: string;
  recoil_compensation: number;
  ammo_capacity: number;
  remaining_ammo: number;
  accuracy: number;
  damage_value: string;
  armor_penetration: number;
  secondary_effect: string;

  constructor() {
    super();
    this.type = '';
    this.related_skill = '';
    this.mode = '';
    this.recoil_compensation = 0;
    this.ammo_capacity = 0;
    this.remaining_ammo = 0;
    this.accuracy = 0;
    this.damage_value = '';
    this.armor_penetration = 0;
    this.secondary_effect = '';
  }
}
