import { Component } from '@angular/core';

// Import the DataService
import { CharacterService } from './services/character.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // Define a users property to hold our user data
  characters: Array<any>;

  // Create an instance of the DataService through dependency injection
  constructor(private _characterService: CharacterService) {

    // Access the Data Service's getUsers() method we defined
    this._characterService.getCharacters()
      .subscribe(res => this.characters = res);
  }
}
