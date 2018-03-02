class Attributes {
  _id: string;
  initial_attributes: Object;
  attributes: Object;
  augmented_attributes: Object;
  attributes_points: number;
  attributes_spent: number;

  constructor() {
    this.initial_attributes = [];
    this.attributes = [];
    this.augmented_attributes = [];
    this.attributes_points = 0;
    this.attributes_spent = 0;
  }
}
