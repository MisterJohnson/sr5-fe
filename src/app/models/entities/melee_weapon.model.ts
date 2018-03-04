class MeleeWeapon extends Base {
  type: string;
  related_skill: string;
  reach: number;
  accuracy: number;
  damage_value: string;
  armor_penetration: number;
  secondary_effect: string;

  constructor() {
    super();
    this.type = '';
    this.related_skill = '';
    this.reach = 0;
    this.accuracy = 0;
    this.damage_value = '';
    this.armor_penetration = 0;
    this.secondary_effect = '';
  }
}
