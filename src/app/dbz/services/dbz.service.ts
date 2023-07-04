import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';

/*
En caso de que no encuentre o comprenda la dependenci coloca 'npm i --save-dev @types/uuid' en la terminal
para instalar una dependencia de desarrollo
link: https://www.npmjs.com/package/uuid
*/
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  //
  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  //Procesar lo que se recive del hijo

  //Agrega nuevo elemento
  addCharacter( character: Character): void{
    // agregar elemento al arreglo

    const newCharacter: Character = { id: uuid(), ...character };

    this.characters.push(newCharacter);
  }

  //Elimina un elemento
  /*
  onDeletedCharacter(index: number):void{
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    this.characters.splice(index,1);
    console.log(this.characters);
  }
  */
  deleteCharacterById(id: string):void{
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    this.characters = this.characters.filter( character => character.id !== id );
    //console.log(this.characters);
  }

  constructor() { }

}
