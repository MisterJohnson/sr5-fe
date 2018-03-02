class Character {
  _id: string;
  name: string;
  alias: string;
  current_karma: number;
  spent_karma: number;
  physical_description: string[];
  background: string;
  picture: object;
  date_creation: Date;
  date_updated: Date;
  current_essence: number;

  // Object containing the information of the character
  inventory: Object;
  priority: Object;
  attributes: Object;
  skills: Object;
  augmentations: Object;
  magic_resonance: Object;
  socials: Object;


  constructor() {
    this.name = '';
    this.alias = '';
    this.current_karma = 0;
    this.spent_karma = 0;
    this.date_creation = new Date();
    this.date_updated = new Date();
    this.background = '';
    this.current_essence = 0;

    this.inventory = Object();
    this.priority = Object();
    this.attributes = Object();
    this.skills = Object();
    this.augmentations = Object();
    this.magic_resonance = Object();
    this.socials = Object();
  }
}

export default Character;
