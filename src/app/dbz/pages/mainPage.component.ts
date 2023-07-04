import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interfaces';

// import { Character } from '../interfaces/character.interfaces';


@Component({
  selector: 'app-component-main-page',
  templateUrl: 'mainPage.component.html'
})

export class MainPageComponent {

  constructor( private dbzService: DbzService ){}

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter( id: string ):void {
    this.dbzService.deleteCharacterById( id );
  }

  onNewCharacter( character: Character ):void {
    this.dbzService.addCharacter( character );
  }

}
