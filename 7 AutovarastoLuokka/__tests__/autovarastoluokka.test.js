'use strict';

const Varasto = require('../autovarastoluokka');
const oletustiedosto='./autot.json';

describe('testataan luokkaa oletusdatalla', ()=>{
    const varasto= new Varasto(oletustiedosto);

    test('testataan hae("rekisteri", "ABC-1")', ()=>{
        const odotettu = [{"malli":"Hoppa", "rekisteri":"ABC-1"}];

        return expect(varasto.hae('rekisteri','ABC-1')).resolves.toEqual(odotettu);
    });
    test('testataan hae("malli", "Hoppa")', ()=>{
        const odotettu=[
            {"malli":"Hoppa", "rekisteri":"ABC-1"},
            {"malli":"Hoppa", "rekisteri":"GTF-1"},
        ];

        return expect(varasto.hae('malli', 'Hoppa')).resolves.toEqual(odotettu);
    });

    test('haetaan mallia jota ei ole', ()=>{
        return expect(varasto.hae('malli', 'x')).resolves.toEqual([]);
    });

    test('testataan väärällä avaimella "väri"', ()=>{
        return expect(varasto.hae('väri', 'oranssi')).rejects.toBe('avainta ei löydy');
    });
    test('testataan puuttuvat parametri', ()=>{
        return expect(varasto.hae()).rejects.toBe('parametri puuttuu');
    });
});

describe('testataan lukuvirhe', ()=>{
    test('testataan tiedostolla "x.json"', ()=>{
        const varasto=new Varasto('./x.json');
        return expect(varasto.hae('rekisteri', 'ABC-1')).rejects.toBe('lukuvirhe');
    });
});