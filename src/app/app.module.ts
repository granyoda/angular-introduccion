import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//NUEVOS
//Modulos
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';

//Componentes
// import { CounterComponent } from './counter/counter.component';
// import { HeroComponent } from './heroes/hero/hero.component';
// import { ListComponent } from './heroes/list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    /*
    CounterComponent,
    HeroComponent,
    ListComponent
    */

  ],
imports: [
    BrowserModule,
    // aqui colocan los modulos que de otras sessiones para que se puedan trabajar de manera global
    CounterModule,
    HeroesModule,
    //seccion 2
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
