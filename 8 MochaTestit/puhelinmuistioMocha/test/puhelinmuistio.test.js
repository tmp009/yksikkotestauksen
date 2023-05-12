'use strict';

const expect = require('chai').expect;

const puhelimet = require('../puhelimet.json');
const Puhelinmuistio = require('../puhelinmuistio.js');

describe('Testataan metodi haeTyypit', function () {

    const muistio = new Puhelinmuistio(puhelimet);

    it('1. Haetaan tyypit oletusdatalla', function () {
        expect(muistio.haeTyypit()).to.deep.equal(["koti", "työ", "mobiili"]);
    });

    it('haeTyypit määritelty', function () {
        expect(muistio).to.have.a.property('haeTyypit');
    });
});

describe('Testataan metodi haeHenkilönNumerotTyypilla', function () {

    const testiArvot=[
        {etunimi:'Leila', sukunimi:'Hökki', tyyppi:'työ', odotettu:["87654321", "050403020"]},
        {etunimi:'Matti', sukunimi:'Puro', tyyppi:'mobiili', odotettu:["05012345"]},
        {etunimi:'Leila', sukunimi:'Hökki', tyyppi:'koti', odotettu:["12345678"]},
        {etunimi:'x', sukunimi:'Hökki', tyyppi:'koti', odotettu:[]},
        {etunimi:'Leila', sukunimi:'x', tyyppi:'koti', odotettu:[]},
        {etunimi:'x', sukunimi:'y', tyyppi:'z', odotettu:[]},
        {etunimi:'Leila', sukunimi:'Hökki', tyyppi:'x', odotettu:[]},
    ];

    const muistio = new Puhelinmuistio(puhelimet);

    testiArvot.forEach(function (tt) { //tt=testitapaus
        it(`haeHenkilönNumerotTyypilla('${tt.etunimi}','${tt.sukunimi}', '${tt.tyyppi}')`, function () {
            expect(muistio.haeHenkilönNumerotTyypilla(tt.etunimi, tt.sukunimi, tt.tyyppi))
                .to.deep.equal(tt.odotettu);
        });
    });
});