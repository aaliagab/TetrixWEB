export class jugador{
    constructor(nombre,puntos){
        this.nombre = nombre;
        this.puntos = puntos;
    }
    get nombre(){
        return this.nombre;
    }

    get puntos(){
        return this.puntos;
    }
}