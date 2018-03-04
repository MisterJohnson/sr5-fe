class MatrixGears extends Base {
  rating: number;
  capacity: number;
  attributes_array: number[];
  programs: Object[];


  constructor() {
    super();
    this.rating  = 0;
    this.capacity = 0;
    this.attributes_array = [];
    this.programs = [];
  }
}
