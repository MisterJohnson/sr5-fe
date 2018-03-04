class Base {
  _id: string;
  name: string;
  cost: number;
  modifications: Object[];
  device_rating: number;
  availibility: string;
  description: string;
  manufacturer: string;

  constructor() {
    this.name = '';
    this.cost = 0;
    this.modifications = [];
    this.device_rating = 0;
    this.availibility = '';
    this.description = '';
    this.manufacturer = '';
  }
}
