import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  //me implementa el OnInit y este es el primer ciclo de vida de Angular
  //lo hace automaticamente
  heroes: string[] = ["Spiderman" , "Ironman", "Hulk", "Thor"];
  heroeBorrado: string= "";
  constructor() { }


  borrarHeroe() {
   
    this.heroeBorrado = this.heroes.shift() || "";
    //borramos los heroes
  }
  ngOnInit(): void {
  }

}
