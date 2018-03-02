class Skills {
  _id: string;
  skills_points: number;
  skills_points_spent: number;
  skills_group_points: number;
  skills_group_spent: number;
  attributes_spent: number;
  skills_selection: Object;
  group_skill_selection: Object;
  augmented_skill_table: Object;
  magic_resonance_added_skills: Object;
  final_skill_selection: Object;

  constructor() {
    this.skills_points = 0;
    this.skills_points_spent = 0;
    this.skills_group_points = 0;
    this.skills_group_spent = 0;
    this.attributes_spent = 0;

    this.skills_selection = [];
    this.group_skill_selection = [];
    this.augmented_skill_table = [];
    this.magic_resonance_added_skills = [];
    this.final_skill_selection = [];
  }
}
