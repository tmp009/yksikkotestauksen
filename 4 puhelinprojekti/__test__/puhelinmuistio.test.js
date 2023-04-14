'use strict';

const puhelimet = require('../puhelimet.json');
const Puhelinmuistio = require('../puhelinmuistio.js');

describe('Testataan konstruktori', ()=>{
    test('1. Testataan puuttuvalla parametrilla', ()=>{
        expect(() => new Puhelinmuistio()).toThrow('Parametri puuttuu');
    });

    // Tätä ei pidä normaalisti tehdä!
    // test('Sisäisen toteutuksen avulla', ()=>{
    //     const muistio=new Puhelinmuistio(puhelimet);
    //     expect(muistio.puhelindata).toEqual(puhelimet)
    // });
});

describe('Testataan metodi haeTyypit', ()=>{
    
    test('1. Haetaan tyypit oletusdatalla', ()=>{
        const muistio = new Puhelinmuistio(puhelimet);
        expect(muistio.haeTyypit()).toEqual(["koti", "työ", "mobiili"]);
    });

    test('2. Käytettään muokattua testidataa',()=>{
        const testidata = [
            {
                "etunimi":"Leila",
                "sukunimi":"Hökki",
                "puhelimet":[]
            },
            {
                "etunimi":"Matti",
                "sukunimi":"Puro",
            }
        ];
        const muistio = new Puhelinmuistio(testidata);
        expect(muistio.haeTyypit()).toEqual([]);
    });

    test('3. Testidata on tyhjä taulukko', ()=>{
        const muistio = new Puhelinmuistio([])
        expect(muistio.haeTyypit()).toEqual([]);
    });

    test('4. Tyyppi, joka on tyhjä merkkijono, ei tule tulostaulukkoon', ()=>{
        const testidata = [
            {
                "etunimi":"Leila",
                "sukunimi":"Hökki",
                "puhelimet":[
                    {"tyyppi":"", "numero":"12345678"},
                    {"tyyppi":"työ", "numero":"87654321"},
                    {"tyyppi":"työ", "numero":"050403020"}
                ]
            },
            {
                "etunimi":"Matti",
                "sukunimi":"Puro",
                "puhelimet":[
                    {"tyyppi":"työ", "numero":"56789012"},
                    {"tyyppi":"mobiili", "numero":"05012345"},
                    {"tyyppi":"koti", "numero":"9876543"}
                ]
            }
        ];

        const muistio = new Puhelinmuistio(testidata);
        expect(muistio.haeTyypit()).toEqual(["työ", "mobiili", "koti"]);
    });

    test(' 5. jolatakin henkilöltä puhelimia puuttuu', ()=>{
        const testidata = [
            {
                "etunimi":"Leila",
                "sukunimi":"Hökki",
                "puhelimet":[]
            },
            {
                "etunimi":"Veera",
                "sukunimi":"Puro",
                "puhelimet":[
                    {"tyyppi":"työ", "numero":"111112222"}
                ]
            },
            {
                "etunimi":"Pirkko",
                "sukunimi":"Puro"
            },
            {
                "etunimi":"Meri",
                "sukunimi":"Myrkylä",
                "puhelimet":[
                    {"tyyppi":"", "numero":"12345678"},
                    {"tyyppi":"koti", "numero":"222333333"},
                    {"tyyppi":"työ", "numero":"86767676767"}
                ]
            }
        ];

        const muistio = new Puhelinmuistio(testidata);
        expect(muistio.haeTyypit()).toEqual(["työ", "koti"]);
    })
});

// describe('Testataan')