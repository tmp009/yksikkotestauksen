"use strict";

const {Noppa} = require("./noppa.js");


class Kolikko {
    #noppa = new Noppa(2);

    constructor () {}
    heita() {
        this.#noppa.heitaNoppaa();
    }

    toString() {
        if (!this.#noppa.pisteet) {
            return 'Kolikkoa ei ole heitetty'
        }
        if (this.#noppa.pisteet === 1) {
            return 'Klaava'
        }

        return 'Kruunan'
    }

    get pisteet() {
        return this.#noppa.pisteet
    }
}

module.exports = {Kolikko}