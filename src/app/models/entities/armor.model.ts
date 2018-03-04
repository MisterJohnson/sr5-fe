class Armor extends Base {
  _id: string;
  rating: number;
  capacity: number;
  features: string;

  constructor() {
    super();
    this.rating  = 0;
    this.capacity = 0;
    this.features = '';
  }
}
