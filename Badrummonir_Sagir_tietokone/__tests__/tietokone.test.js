'use strict';

const tietovarasto = require('../tietovarasto.json');
const Tietokonevarasto = require('../tietokonevarasto.js');

describe('Testataan konstruktori', ()=>{
   test('1. Testataan puuttuvalla parametrilla', ()=>{
        expect(()=>new Tietokonevarasto()).toThrow('tiedot puuttuvat');
    }) 
})

describe('Testataan metodi hae_tietokoneen_lukumäärä_avaimella_merkki', ()=>{
    const varasto = new Tietokonevarasto(tietovarasto);

    test('1. Hae "BigFlop Mark II"', ()=>{ 
        expect(varasto.hae_tietokoneen_lukumäärä_avaimella_merkki("BigFlop Mark II")).toEqual(22);
    });

    test('2. Hae "MaxEffect 2000"', ()=>{ 
        expect(varasto.hae_tietokoneen_lukumäärä_avaimella_merkki("MaxEffect 2000")).toEqual(150);
    });

    test('3. Hae "x"', ()=>{ 
        expect(varasto.hae_tietokoneen_lukumäärä_avaimella_merkki("x")).toBeNull();
    });

    test('4. Puutuva parametri aiheuttaa poikeuksen', ()=>{ 
        expect(()=>varasto.hae_tietokoneen_lukumäärä_avaimella_merkki()).toThrow('parametri puuttuu');
    });
});

describe('Testataan metodi hae_tietokoneen_värit', ()=>{
    const testidata = [
        {
          "ID": 1,
          "merkki": "BigFlop Mark II",
          "tyyppi": "pelikone",
          "hinta": 36,
          "lukumäärä": 7,
          "lisätiedot": {
            "malli": "GT",
            "energialuokka": "B",
            "kommentti": "ei huomauttamista"
          }
        },
        {
          "ID": 2,
          "merkki": "Hirmu II",
          "tyyppi": "pelikone",
          "hinta": 25,
          "lukumäärä": 30,
          "värit": [],
          "lisätiedot": {
            "malli": "gold",
            "energialuokka": "A",
            "kommentti": "-"
          }
        },
        {
          "ID": 3,
          "merkki": "MaxEffect 2000",
          "tyyppi": "pöytäkone",
          "hinta": 300,
          "lukumäärä": 150,
          "värit": [
            "valkoinen",
            "punainen",
            "vihreä"
          ],
          "lisätiedot": {
            "malli": "XL",
            "energialuokka": "A+",
            "kommentti": "huippulaite"
          }
        },
        {
          "ID": 4,
          "merkki": "Xunil 4.7",
          "tyyppi": "palvelin",
          "hinta": 700,
          "lukumäärä": 13,
          "värit": [
            "oranssi",
            "punainen",
            "valkoinen"
          ],
          "lisätiedot": {
            "malli": "XL",
            "energialuokka": "E",
            "kommentti": "-"
          }
        },
        {
          "ID": 5,
          "merkki": "BigFlop Mark II",
          "tyyppi": "kannettava",
          "hinta": 300,
          "lukumäärä": 15,
          "värit": [
            "punainen",
            "valkoinen",
            "keltainen"
          ]
        }
    ]

    const varasto = new Tietokonevarasto(testidata);

    test('1. Hae ID 1:n värit', ()=>{ 
        expect(varasto.hae_tietokoneen_värit(3)).toEqual(["valkoinen", "punainen", "vihreä"]);
    });
    
    test('2. Väri taulokko on tyhjä', ()=>{
        expect(varasto.hae_tietokoneen_värit(2)).toEqual([]);
    });

    test('3. Väri taulokko ei olemassa', ()=>{
        expect(varasto.hae_tietokoneen_värit(1)).toEqual([]);
    });

    test('4. Puutuva parametri palautta tyhjä taulukko', ()=>{
        expect(varasto.hae_tietokoneen_värit()).toEqual([]);
    });
});

describe('Testataan metodi hae_tietokoneiden_kokonaishinta_hakuehdolla_tyyppi', ()=>{
    const varasto = new Tietokonevarasto(tietovarasto);

    test('1. Hae "pelikone" kokonaishinta', ()=>{ 
        expect(varasto.hae_tietokoneiden_kokonaishinta_hakuehdolla_tyyppi("pelikone")).toEqual(61);
    });

    test('2. Hae "pöytäkone" kokonaishinta', ()=>{ 
        expect(varasto.hae_tietokoneiden_kokonaishinta_hakuehdolla_tyyppi("pöytäkone")).toEqual(300);
    });

    test('3. Aiheuttaa poikkeuksen, jos ei löytyy tietoa ', ()=>{ 
        expect(()=>varasto.hae_tietokoneiden_kokonaishinta_hakuehdolla_tyyppi("x"))
            .toThrow('annetulla avaimella ei löytynyt tietoja');
    });

    test('4. Puutuva parametri aiheuttaa poikeuksen', ()=>{ 
        expect(()=>varasto.hae_tietokoneiden_kokonaishinta_hakuehdolla_tyyppi()).toThrow('parametri puuttuu');
    });
});

describe('Testataan metodi hae_tietokone_perusavaimella_ID', ()=>{
    const varasto = new Tietokonevarasto(tietovarasto);

    const odotettu = {
        "ID": 1,
        "merkki": "BigFlop Mark II",
        "tyyppi": "pelikone",
        "hinta": 36,
        "lukumäärä": 7,
        "värit": [
          "oranssi",
          "musta",
          "punainen"
        ],
        "lisätiedot": {
          "malli": "GT",
          "energialuokka": "B",
          "kommentti": "ei huomauttamista"
        }
    }

    test('1. Hae kone ID 1', ()=>{
        expect(varasto.hae_tietokone_perusavaimella_ID(1)).toEqual(odotettu);
    });

    test('2. Hae kone, joka ei ole tietovarastossa', ()=>{
        expect(varasto.hae_tietokone_perusavaimella_ID(999)).toBeNull();
    });

    test('3. Puutuva parametri aiheuttaa poikeuksen', ()=>{
        expect(()=>varasto.hae_tietokone_perusavaimella_ID()).toThrow('parametri puuttuu');
    });
});

describe('Testataan metodi hae_lisätiedot', ()=>{
  const varasto = new Tietokonevarasto(tietovarasto);

  test('1. Hae kone ID 4 lisätiedot', ()=>{
        expect(varasto.hae_lisätiedot(4)).toEqual(
            {
            "malli": "XL",
            "energialuokka": "E",
            "kommentti": "-"
            });
    });

  test('2. Hae kone ID 2 lisätiedot', ()=>{
        expect(varasto.hae_lisätiedot(2)).toEqual(
            {
                "malli": "gold",
                "energialuokka": "A",
                "kommentti": "-"
            });
    });

  test('3. Hae kone ID 5, jossa ei ole lisätiedot', ()=>{
      expect(varasto.hae_lisätiedot(5)).toBeNull();
  });
  
  test('4. Hae lisätiedot ilman hakuavain', ()=>{
    expect(varasto.hae_lisätiedot()).toBeNull();
  });
  
});