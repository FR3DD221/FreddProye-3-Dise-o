export default class Planta {
    nombre;
    direccion;
    contacto;

    constructor(nombre, provincia, canton, distrito, senas, nombrePer, tel) {
        this.nombre = nombre;
        this.direccion = provincia + ", " + canton + ", " + distrito + ", " + senas;
        this.contacto = nombrePer + ", " + tel;
    }
}