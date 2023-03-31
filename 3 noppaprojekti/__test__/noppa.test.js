"use strict";

const { Noppa } = require("../noppa.js")


describe('getteritja metodit  määritelty', () => {
    const noppa = new Noppa();

    test('pisteet määritelty', ()=>{
        expect(noppa.pisteet).toBeDefined();
    });

    test('pisteet minimi', ()=>{
        expect(noppa.minimi).toBeDefined();
    });

    test('maksimi määritelty', ()=>{
        expect(noppa.maksimi).toBeDefined();
    });

    test('metodi heitaNoppaa määritelty', ()=>{
        expect(noppa.heitaNoppaa).toBeDefined();
    });
});


describe('Luodaan noppa antamalla ylärajaa', () => {
    const noppa = new Noppa()

    test('maksimi on 6', ()=>{
        expect(noppa.maksimi).toBe(6)
    });

    test('minimi on 1', ()=>{
        expect(noppa.minimi).toBe(1)
    });

    test('pisteet on 0', ()=>{
        expect(noppa.pisteet).toBe(0)
    });
})

describe('Luodaan noppaa ylärajalla 2..20', ()=>{
    const testiArvot = new Array(19).fill(2).map((arvo, ind) => [arvo + ind])

    test.each(testiArvot)("testataan ylärajalla %s", ylaraja=>{
        const noppa = new Noppa(ylaraja);

        expect(noppa.maksimi).toBe(ylaraja);
        expect(noppa.minimi).toBe(1);
    });
});

describe('testataan konstruktorin poikkeukset', () => {
    const testiArvot = [
        [0, 'Yläraja liian pieni'],
        [1, 'Yläraja liian pieni'],
        [-1, 'Yläraja liian pieni'],
        [21, 'Yläraja liian iso'],
        [99, 'Yläraja liian iso'],
        ['a', 'Ylärajan pitää olla kokonaisluku'],
        [2.5, 'Ylärajan pitää olla kokonaisluku'],
        [-2.5, 'Ylärajan pitää olla kokonaisluku'],

    ]

    test.each(testiArvot)('yläraja %s aiheuttaa poikkeuksen %s', (ylaraja, poikkeus) => {
        expect(() => new Noppa(ylaraja) ).toThrow(poikkeus);
    });
});

describe("Testataan nopanheittoa", ()=>{
    test('Luodaan oletusylärajalla', ()=>{
        const noppa = new Noppa();
        noppa.heitaNoppaa();
        expect(noppa.pisteet).toBeGreaterThanOrEqual(1)
        expect(noppa.pisteet).toBeLessThanOrEqual(6)
    });

    describe("Luodaan noppa ylärajalla 2...20", ()=>{
        const testiArvot = new Array(19).fill(2).map((arvo, ind) => [arvo + ind])
        test.each(testiArvot)('Noppa ylärajalla %s', ylaraja => {
            const noppa = new Noppa(ylaraja);
            noppa.heitaNoppaa();
            expect(noppa.pisteet).toBeGreaterThanOrEqual(noppa.minimi)
            expect(noppa.pisteet).toBeLessThanOrEqual(noppa.maksimi)
        });
    });
});

describe('testataan toString', ()=>{
    let noppa;

    beforeEach(() => {noppa = new Noppa();});

    test('noppaa ei ole heitetty', ()=>{
        expect(noppa.toString()).toBe('Noppaa ei ole heitetty')
    });

    test('noppaa heitetty', ()=>{
        noppa.heitaNoppaa();
        expect(noppa.toString()).toBe(`${noppa.pisteet}`)
    });
});