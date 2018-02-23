import Character from '../models/character.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Response} from '@angular/http';
import { Injectable } from '@angular/core';

// RxJS operator for mapping the observable
import 'rxjs/add/operator/map';


@Injectable()
export class CharacterService {

  api_url = 'http://localhost:3000';
  characterUrl = `${this.api_url}/api/character`;

  constructor(
    private http: HttpClient
  ) { }

  // Create character, takes a Character Object
  createCharacter(character: Character): Observable<any> {
    // returns the observable of http post request
    return this.http.post(`${this.characterUrl}`, character);
  }

  // Read character, takes no arguments
  getCharacters(): Observable<Character[]> {
    return this.http.get(this.characterUrl)
      .map(res  => {
        // Maps the response object sent from the server
        return res['data'].docs as Character[];
      });
  }
  // Update character, takes a Character Object as parameter
  editTodo(character: Character) {
    const editUrl = `${this.characterUrl}`;
    // returns the observable of http put request
    return this.http.put(editUrl, character);
  }

  deleteTodo(id: string): any {
    // Delete the object by the id
    const deleteUrl = `${this.characterUrl}/${id}`;
    return this.http.delete(deleteUrl)
      .map(res  => {
        return res;
      });
  }

  // Default Error handling method.
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
