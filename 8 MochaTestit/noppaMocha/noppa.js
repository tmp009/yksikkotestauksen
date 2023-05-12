"use strict";

class Noppa {
    #silmaluku
    constructor (ylaraja = 6) {

        if (!Number.isInteger(ylaraja)) {
            throw new Error("Ylärajan pitää olla kokonaisluku")
        }

        if (ylaraja > 20) {
            throw new Error("Yläraja liian iso")
        }

        if (ylaraja < 2) {
            throw new Error("Yläraja liian pieni")
        }

        this.#silmaluku = 0
        this.ylaraja = ylaraja
    }

    get maksimi() { return this.ylaraja }
    get minimi() { return 1; }
    get pisteet() { return this.#silmaluku }

    heitaNoppaa() {
        this.#silmaluku = Math.ceil(Math.random() * this.ylaraja)
    }

    toString() {
        // if (!this.silmaluku) {
        //     return 'Noppaa ei ole heitetty'
        // }
        // else {
        //     return `${this.silmaluku}`
        // }

        return !this.#silmaluku ? 'Noppaa ei ole heitetty' : `${this.#silmaluku}`
    }

}

module.exports = {Noppa}