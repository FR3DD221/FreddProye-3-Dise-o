import Planta from './Planta.js';
import Parqueo from './Parqueo.js';

export default class Bridge {

    planta;
    parqueos = [];

    constructor(Planta) {
        this.planta = Planta;
    }

    anadirParqueos(Parqueo) {
        this.parqueos.push(Parqueo);
    }
}