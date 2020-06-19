import { Component }  from '@angular/core';

@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html'
})

export class Micomponente{

    public titulo: String;
    public comentario: String;
    public year: number;
    public mostrarPeliculas: boolean;

    constructor(){
        this.titulo = "Hola mundo, soy MI COMPONENTE";
        this.comentario = "Este es mi primer comentario";
        this.year = 2020;
        this.mostrarPeliculas = true;

        console.log("Componente mi-componenten cargado!!");
        console.log(this.titulo, this.comentario, this.year);
    }

    ocultarPeliculas(){
        this.mostrarPeliculas = false;
    }
}