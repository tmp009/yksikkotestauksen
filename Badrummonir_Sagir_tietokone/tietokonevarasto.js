'use strict';

module.exports = class Tietokonevarasto {
    #tietokonedata
    constructor(jsondata){
        if (!jsondata) throw new Error('tiedot puuttuvat');

        this.#tietokonedata = jsondata;
    }

    hae_tietokoneen_lukumäärä_avaimella_merkki(hakuarvo){
        if (!hakuarvo) throw new Error('parametri puuttuu');

        const koneet = this.#tietokonedata.filter(kone=>kone.merkki === hakuarvo);
        let summa=0;

        if (!koneet.length) return null;
        
        for (const kone of koneet) {
            summa+=kone.lukumäärä;
        }        
        return summa;
    }

    hae_tietokoneen_värit(hakuavain){
        if (!hakuavain) return [];

        const kone = this.#tietokonedata.find(kone=>kone.ID === hakuavain);

        if (kone.värit) return kone.värit

        return []
    }

    hae_tietokoneiden_kokonaishinta_hakuehdolla_tyyppi(hakuarvo){
        if (!hakuarvo) throw new Error('parametri puuttuu');

        const koneet = this.#tietokonedata.filter(kone=>kone.tyyppi === hakuarvo);

        if (!koneet.length) throw new Error('annetulla avaimella ei löytynyt tietoja');
        
        let summa=0;
        
        for (const kone of koneet) {
            summa+=kone.hinta;
        }        
        return summa;
    }

    hae_tietokone_perusavaimella_ID(hakuavain){
        if (!hakuavain) throw new Error('parametri puuttuu');

        const kone = this.#tietokonedata.find(kone=>kone.ID===hakuavain);

        return typeof kone !== 'undefined' ? kone : null;
    }

    hae_lisätiedot(hakuavain){
        if (!hakuavain) return null;

        const kone = this.#tietokonedata.find(kone=>kone.ID === hakuavain);

        if (kone.lisätiedot) return kone.lisätiedot;

        return null;
    }
}