import { Response } from '@angular/http';
import { CharacterService } from './services/character.service';
import Character from './models/character.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    // Private todoservice will be injected into the component by Angular Dependency Injector
    private characterService: CharacterService
  ) { }

  // Declaring the new character Object and initialising it
  public newCharacter: Character = new Character();

  // An Empty list for the visible characters list
  charactersList: Character[];
  editCharacters: Character[] = [];

  create(): void {
    this.characterService.createCharacter(this.newCharacter)
      .subscribe((res) => {
        this.charactersList.push(res.data);
        this.newCharacter = new Character();
      });
  }

  ngOnInit(): void {

    // At component initialization the
    this.characterService.getCharacters()
      .subscribe(characters => {
        // assign the characterslist property to the proper http response
        this.charactersList = characters;
        console.log(characters);
      });
  }

  editCharacter(character: Character) {
    console.log(character);
    if (this.charactersList.includes(character)) {
      if (!this.editCharacters.includes(character)) {
        this.editCharacters.push(character);
      } else {
        this.editCharacters.splice(this.editCharacters.indexOf(character), 1);
        this.characterService.editCharacter(character).subscribe(res => {
          console.log('Update Succesful');
        }, err => {
          this.editCharacter(character);
          console.error('Update Unsuccesful');
        });
      }
    }
  }

  doneCharacter(character: Character) {
    character.date = new Date();
    this.characterService.editCharacter(character).subscribe(res => {
      console.log('Update Succesful');
    }, err => {
      this.editCharacter(character);
      console.error('Update Unsuccesful');
    });
  }

  submitCharacter(event, character: Character){
    if (event.keyCode === 13) {
      this.editCharacter(character);
    }
  }

  deleteCharacter(character: Character) {
    this.characterService.deleteCharacter(character._id).subscribe(res => {
      this.charactersList.splice(this.charactersList.indexOf(character), 1);
    });
  }
}
