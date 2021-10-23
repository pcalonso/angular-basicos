import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
     
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],

    //que quiero que sea visible fuera de estos modulos
    exports: [
        ListadoComponent
    ],

    //dentro van modulos
    imports: [
        //ofrece modulos como el ngIf, el ngFor
        CommonModule
    ]
}

)
export class HeroesModule {}