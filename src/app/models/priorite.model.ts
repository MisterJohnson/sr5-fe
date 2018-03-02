class Priorite {
  _id: string;
  metatype: Object;
  attributes: number;
  skills: Object;
  magic: Object;
  ressources: number;

  constructor() {
    this.metatype = [];
    this.attributes = 0;
    this.skills = [];
    this.magic = [];
    this.ressources = 0;
  }
}
