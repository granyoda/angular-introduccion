import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  //Evento generico de tipo Character
  @Output()
  public onNewCharacter : EventEmitter<Character> = new EventEmitter();

  public character: Character={

    name: '',
    power: 0,
  }

  emitCharacter(): void{
    //Con debuger detiene la ejecucion del codigo para hacer pruebas
    // debugger;
    console.log(this.character);

    if( this.character.name.length === 0 ) return;

    this.onNewCharacter.emit(this.character);

    // this.character.name='';
    // this.character.power=0;
    this.character = {name: '', power: 0}
  }

}
