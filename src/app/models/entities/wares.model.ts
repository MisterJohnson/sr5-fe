class Wares extends Base{
  _id: string;
  type: string;
  secondary_effect: string;

  constructor() {
    super();
    this.type = '';
    this.secondary_effect = '';
  }
}
