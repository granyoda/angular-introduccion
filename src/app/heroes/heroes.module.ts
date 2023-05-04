import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'


import { HeroComponent } from './components/hero/hero.component';
import { ListComponent } from './components/list/list.component';


@NgModule({
  declarations:[
    HeroComponent,
    ListComponent
  ],
  exports:[
    HeroComponent,
    ListComponent
  ],
  //Para que funcionen las directivas(ngIf, ngFor, etc.) se tiene que importar CommonModule
  imports:[
    CommonModule,
  ]
})
export class HeroesModule{

}
