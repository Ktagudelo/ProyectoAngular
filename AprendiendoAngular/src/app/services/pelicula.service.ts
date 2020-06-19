import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula';

@Injectable()
export class PeliculaService{

    public peliculas: Pelicula[];

    constructor(){

        this.peliculas = [
            new Pelicula("Spiderman 4", 2019, "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/main_element/public/media/image/2016/06/599898-spiderman-4-arte-conceptual-pelicula-cancelada-sam-raimi.jpg?itok=eBidPX3l"),
            new Pelicula("Los vengadores Endgame", 2018, "https://live.mrf.io/statics/i/ps/cdn1.cinemascomics.com/wp-content/uploads/2020/02/vengadores-endgame-oscar-2020.jpg?width=1200&enable=upscale"),
            new Pelicula("Batman vs Superman", 2011, "https://www.las2orillas.co/wp-content/uploads/2016/03/batman1-780x514.jpg")
        ];
    }
    
    holaMundo(){
        return 'Hola Mundo desde un servicio de Angular!!';
    }

    getPeliculas(){
        return this.peliculas;
    }
}