'use strict';


module.exports = class Puhelinmuistio{
    #puhelindata
    constructor(data){
        if (!data) throw new Error('Parametri puuttuu');
        this.#puhelindata = data;
    }

    haeTyypit() {
        let loydetyt = []

        for (const henkilo of this.#puhelindata) {
            if (henkilo.puhelimet) {
                for (const puhelin of henkilo.puhelimet) {
                    if (puhelin.tyyppi && puhelin.tyyppi!=='') {

                        if (!loydetyt.includes(puhelin.tyyppi)) {
                            loydetyt.push(puhelin.tyyppi);
                        }
                    }
                }
            }
        }

        return loydetyt
    }

    haeHenkilönNumerotTyypilla(etunimi, sukunimi, tyyppi) {
        if (etunimi && sukunimi && tyyppi) {
            const loydetyt = [];

            for (const henkilo of this.#puhelindata) {
                if (henkilo.etunimi === etunimi && 
                    henkilo.sukunimi === sukunimi && 
                    henkilo.puhelimet) {
                    for (const puhelin of henkilo.puhelimet) {
                        if (puhelin.tyyppi === tyyppi) {
                            loydetyt.push(puhelin.numero)
                        }
                    }
                    return loydetyt
                }
            }

            return []
        }
        else {
            throw new Error('Parametri puuttuu');
        }
    }
}