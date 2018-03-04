class Augmentations {
  _id: string;
  essence_tolls: number;
  cyberware_list: Object[];
  bioware_list: Object[];
  nanoware_list: Object[];
  geneware_list: Object[];
  cyberlimbs_list: Object[];
  specialware_list: Object[];
  wares_cost: number;

    constructor() {
      this.essence_tolls = 0;
      this.cyberware_list = [];
      this.bioware_list = [];
      this.nanoware_list = [];
      this.geneware_list = [];
      this.cyberlimbs_list = [];
      this.specialware_list = [];
      this.wares_cost = 0;
    }
}
