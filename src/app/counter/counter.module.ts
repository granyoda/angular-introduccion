import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";


@NgModule({
  //se tiene que declarar para poder utilizarlo
  declarations:[
    CounterComponent
  ],
  //se tiene que exportar para que otros modulos puedan utilizarlo
  exports:[
    CounterComponent
  ]
})
export class CounterModule{

}
