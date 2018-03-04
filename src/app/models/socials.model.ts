class Socials {
  _id: string;
  contacts_list: Object[];
  starting_contacts_points: number;
  contacts_points: number;
  skills_group_spent: number;
  lifestyle: Object[];
  identifications: Object[];

  constructor() {
    this.contacts_list = [];
    this.starting_contacts_points = 0;
    this.contacts_points = 0;
    this.skills_group_spent = 0;
    this.lifestyle = [];
    this.identifications = [];
  }
}
