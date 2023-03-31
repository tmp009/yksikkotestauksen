'use strict';

beforeAll(()=>{
    console.log("beforeAll", 'ajetaan ennen kaikki testejä');
});

afterAll(()=>{
    console.log("afterAll", 'ajetaan kaikkien testien jälkeen');
});

test('tämä on eka testi', ()=>{
    console.log("eka testi");
});

it('Tämä on toka testi', ()=>{
    console.log("toka testi");
});

describe('Tämä on ensinmäinen testikokonaisuus', ()=>{
    beforeEach(()=>{
        console.log('ensimmäisen kokonaisuuden beforeEach');
    });

    afterEach(()=>{
        console.log('ensimmäisen kokonaisuuden afterEach');
    });

    test('ekan koknaisuuden eka testi', ()=>{
        console.log("ekan eka");
    });

    test('ekan koknaisuuden toka testi', ()=>{
        console.log("ekan toka");
    });
});

describe('Toinen kokonaisuus', ()=>{
    beforeAll(()=>{
        console.log("beforeAll", "tokan  kokonaisuuden beforeAll");
    });

    describe('Tokan eka kokonaisuus', ()=>{
        test('tokan kokonaisuuden ekan alikokonaisuuden eka testi', ()=>{
            console.log("tokan ekan eka");
        });

        test('tokan kokonaisuuden ekan alikokonaisuuden toka testi', ()=>{
            console.log("tokan ekan toka");
        });
    });

    describe('tokan toka kokonaisuus', ()=>{
        test('tokan tokan eka', ()=>{
            console.log("tokan tokan eka");
        });
    });

});

describe('testataan merkkijonon yhdistämistä', ()=>{
    // testattava funktio ei normaalisti ole tässä
    const yhdista = (osaA, osaB) => osaA+osaB;

    test('yhdista("eka", "toka") muodostaa merkkijonon ekatoka', ()=>{
        expect(yhdista("eka", "toka")).toBe("ekatoka");
    });
});

describe('testataan poikkeuksen aiheuttavaa funktioita', ()=>{
    // testattava funktio ei normaalisti ole tässä
    function testiFunktio() {
        throw Error('Tämä on poikkeus');
    }

    test('funktio aiheuttaa poikkeuksen "Tämä on poikkeus"', ()=>{
        expect(()=>testiFunktio()).toThrow("Tämä on poikkeus")
    });
});