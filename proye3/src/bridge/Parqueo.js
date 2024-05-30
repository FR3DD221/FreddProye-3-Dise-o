export default class Planta {
    nombre;
    cantidad = 0;

    constructor(nombre) {
        this.nombre = nombre;
    }

    añadirCarros(cantidad) {
        this.cantidad = this.cantidad + cantidad;
    }
}