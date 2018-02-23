class Character {
  _id: string;
  name: string;
  alias: string;
  background: string;
  ages: number;
  date: Date;

  constructor() {
    this.name = '';
    this.alias = '';
    this.background = '';
    this.ages = 20;
    this.date = new Date();
  }
}

export default Character;
