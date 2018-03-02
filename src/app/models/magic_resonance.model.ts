class Attributes {
  _id: string;
  awakened_type: string;
  bonus_skill: Object;
  special_bonus: Object;
  base_awakened_rating: number;
  tradition: string;
  tradition_rules: string[];
  avail_awakened_abilities: string[];
  powerlist: string[];

  constructor() {
    this.awakened_type = '';
    this.bonus_skill = [];
    this.special_bonus = [];
    this.base_awakened_rating = 0;
    this.tradition = '';
    this.tradition_rules = [];
    this.avail_awakened_abilities = [];
    this.powerlist = [];
  }
}
