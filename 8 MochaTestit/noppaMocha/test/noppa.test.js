'use strict';

const expect = require('chai').expect;
const {Noppa} = require('../noppa');

describe('getteritja metodit  määritelty', function (){
   const noppa=new Noppa();

   it('pisteet määritelty', function (){
        expect(noppa).to.have.a.property('pisteet');
   });

   it('minimi määritelty', function () {
        expect(noppa).to.have.a.property('minimi');
   });

   it('metodi heitaNoppaa määritelty', function () {
        expect(noppa).to.have.a.property('heitaNoppaa');
   });
});

describe('Luodaan noppa antamalla ylärajaa', function () {
    const noppa = new Noppa()

    it('maksimi on 6', function (){
        expect(noppa.maksimi).to.equal(6)
    });

    it('minimi on 1', function (){
        expect(noppa.minimi).to.equal(1)
    });

    it('pisteet on 0', function  (){
        expect(noppa.pisteet).to.equal(0)
    });
});

describe('Luodaan noppaa ylärajalla 2...20', function(){
    function testaaYlarajaa(ylaraja) {
        const nopaa=new Noppa(ylaraja);
        it(`yläraja on ${ylaraja}`, function(){
            expect(nopaa.maksimi).to.equal(ylaraja);
        })
    }

    for(let yraja=2; yraja<=20; yraja++){
        testaaYlarajaa(yraja);
    }
});

describe('Luodaan noppa ylärajoilla 2...20 Versio 2', function(){
    const testiArvot = new Array(19).fill(2).map((arvo, ind) => arvo + ind);

    testiArvot.forEach(function (ylaraja) {
        const nopaa=new Noppa(ylaraja);
        it(`yläraja on ${ylaraja}`, function(){
            expect(nopaa.maksimi).to.equal(ylaraja);
        });
    });
});

describe('testataan konstruktorin poikkeukset', function(){
    const testiArvot=[
        {ylaraja:0, odotettu:'Yläraja liian pieni'}, //testitapaus 1
        {ylaraja:21, odotettu:'Yläraja liian iso'}, //testitapaus 2
        {ylaraja:'a', odotettu:'Ylärajan pitää olla kokonaisluku'} //testitapaus 3
        //plus muut testit
    ];
    
    testiArvot.forEach(function (testitapaus) {
        it(`Yläraja ${testitapaus.ylaraja} aiheuttaa poikkeuksen '${testitapaus.odotettu}'`, function () {
            expect(function () {
                new Noppa(testitapaus.ylaraja);
            }).to.throw(testitapaus.odotettu);
        });
    });
});

describe('Testataan, että liian pieni yläraja aiheuttaa poikkeuksen', function () {
    [-1,0,1].forEach(function name(ylaraja) {
        it(`Yläraja ${ylaraja} aiheuttaa poikkeuksen: 'Yläraja liian pieni'`, function () {
            expect(function () {
                new Noppa(ylaraja);
            }).to.throw('Yläraja liian pieni');
        });
    });
});

describe('Testataan heitaNoppaa oletusylärajalla 6', function () {
    let noppa;

    beforeEach(function () {
        noppa=new Noppa();
    });

    it('testataan noppaa, kun ei ole heitetty', function () {
        expect(noppa.pisteet).to.equal(0);
    });

    it('noppa on heitetty', function () {
        noppa.heitaNoppaa();
        expect(noppa.pisteet).to.be.within(1,6);
    });
});

describe('testataan toString', function () {
    let noppa;

    beforeEach(function(){
        noppa=new Noppa();
    });

    it('noppaa ei ole heitetty', function () {
        expect(noppa.toString()).to.equal('Noppaa ei ole heitetty')
    });

    
    it('noppaa heitetty', function () {
        noppa.heitaNoppaa();
        expect(noppa.toString()).to.equal(`${noppa.pisteet}`)
    });
})