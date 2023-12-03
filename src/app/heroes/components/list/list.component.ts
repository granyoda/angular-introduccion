import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'Thor', 'Ironman', 'Capitan America'];
  public deletedHero? : string;

  constructor() { }

  removeLastHero(): void{
    //pop regresa el valor eliminado (que sería el ultimo de la lista)
    this.deletedHero = this.heroNames.pop();
  }

}
