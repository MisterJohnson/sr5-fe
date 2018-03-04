class Gear extends Base {
  _id: string;
  rating: number;
  capacity: number;

  constructor() {
    super();
    this.rating  = 0;
    this.capacity = 0;
  }
}
