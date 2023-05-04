import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'Tony Stark';
  public alias: string = 'Iron Man';
  public age: number = 45;

  constructor() { }

  get capitalizedName(): string{
    return this.alias.toUpperCase();
  }

  getHeroDescription():string{

    return `${ this.alias } - ${ this.age }`;
  }
  changeName():void{
    this.name = 'Peter'
    this.alias = 'Spiderman'
  }
  changeAge():void{
    this.age =25;
  }
  reset(){
    this.name = 'Tony';
    this.alias = 'IronMan';
    this.age = 45;
  }

}
