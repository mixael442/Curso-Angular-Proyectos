import { Component } from '@angular/core';

interface Persona{
  nombre:string;
  favoritos:Favorito[];
}

interface Favorito{
  id:number;
  nombre:string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent  {

  nuevoJuego:string='';

 persona:Persona={
  nombre:'Bill Gates',
  favoritos:[
    {id:1, nombre:"Metal Gear"},
    {id:2, nombre:"German Garmendia"},
    {id:3, nombre:"Fernanfloo"},
  ]
 }

 eliminar(index:number){
  this.persona.favoritos.splice(index, 1)
 }

  guardar(){

  }

  agregarJuego(){
    const nuevoFavorito:Favorito={
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego,
      
    }

    this.persona.favoritos.push({...nuevoFavorito})
    this.nuevoJuego = '';
  }

}
