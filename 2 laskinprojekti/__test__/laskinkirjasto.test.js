'use strict';

const {summa, erotus} = require('../laskinkirjasto.js')

describe("Summa funktio testi", ()=>{

    describe('1. testataan kokonaisluvuilla yksittäin', ()=>{
        test('testataan, että summa(1, 1) palauttaa 2', ()=>{
            expect(summa(1,1)).toBe(2);
        });
    
        test('testataan, että summa(2, 3) palauttaa 5', ()=>{
            expect(summa(2,3)).toBe(5);
        });
    
        test('testataan, että summa(12, 100) palauttaa 112', ()=>{
            expect(summa(12,100)).toBe(112);
        });   
    });
    
    describe('1. testataan taulokoiduilla kokonaisluvuilla', ()=>{
        const testiArvot = [
            // a, b, odotettu
            [2,  -4, -2],
            [-4,  6, 2],
            [-3, -5, -8],
            [0, 0, 0],
            [0, 3, 3],
            [3, 0, 3],
            [0, -3, -3],
            [-3, 0, -3],
            [5, -5, 0]
        ];
    
        test.each(testiArvot)('summa(%s, %s) palauttaa %s', (a, b, odotettu)=>{
            expect(summa(a, b)).toBe(odotettu);
        });
    });
    
    describe('2. testataan taulokoiduilla desimaaliluvulla', ()=>{
        const testiArvot = [
            // a, b, odotettu
            [10, 11.5, 21.5],
            [2.5, 3, 5.5],
            [-2.5, 3, 0.5],
            [2.5, -3, -0.5],
            [-2.5, 2.5, 0],
            [-2.5, -2.5, -5.0],
            [2.4, -2.5, -0.1]
        ];
    
        test.each(testiArvot)('summa(%s, %s) palauttaa %s', (a, b, odotettu)=>{
            expect(summa(a, b)).toBeCloseTo(odotettu);
        });
    });
    
    describe('3. Parametri puuttuu', ()=>{
        test('summa() aiheuttaa poikkeuksen "parametri puuttuu"', ()=>{
            expect(()=>summa()).toThrow("parametri puuttuu")
        });
        const testiArvot = [
            [1], 
            ['a'], 
            ['']]
    
        test.each(testiArvot)('summa(%s) aiheuttaa poikkeuksen "parametri puuttuu"', a => {
            expect(()=>summa(a)).toThrow("parametri puuttuu")
        })
    });
    
    describe('4. Parametri ei numeerinen', ()=>{
        const testiArvot = [
            ['summa("1", "2")', '1', '2'],
            ['summa("a", 1)', 'a', 1],
            ['summa(1, "a")', 1, 'a'],
            ['summa("", "")', '', ''],
            ['summa(null, 1)', null, 1],
            ['summa(1, null)', 1, null],
            ['summa(undefined, 1)', undefined, 1],
            ['summa(1, undefined)', 1, undefined]
        ]
    
        test.each(testiArvot)('%s aiheuttaa poikkeuksen "vain numero sallittuja"', (a, b, c) => {
            expect(()=>summa(b, c)).toThrow("vain numero sallittuja")
        })
    })
})

describe("Erotus funktio testi", ()=>{
    describe('1. testataan taulokoiduilla kokonaisluvuilla', ()=>{
        const testiArvot = [
            // a, b, odotettu
            [2, -4, 6],
            [4, 4, 0],
            [3, 5, -2],
            [0, 0, 0],
            [0, 3, -3],
            [3, 0, 3],
            [0, -3, 3],
            [-3, 0, -3],
            [5, -5, 10]
        ];
    
        test.each(testiArvot)('erotus(%s, %s) palauttaa %s', (a, b, odotettu)=>{
            expect(erotus(a, b)).toBe(odotettu);
        });
    });
    
    describe('2. testataan  taulokoiduilla desimaaliluvulla', ()=>{
        const testiArvot = [
            // a, b, odotettu
            [10, 11.5, -1.5],
            [2.5, 3, -0.5],
            [-2.5, 3, -5.5],
            [2.5, -3, 5.5],
            [2.5, 2.5, 0],
            [-2.5, -2.5, 0],
            [2.4, -2.5, 4.9]
        ];
    
        test.each(testiArvot)('erotus(%s, %s) palauttaa %s', (a, b, odotettu)=>{
            expect(erotus(a, b)).toBeCloseTo(odotettu);
        });
    });
    
    describe('3. Parametri puuttuu', ()=>{
        test('erotus() aiheuttaa poikkeuksen "parametri puuttuu"', ()=>{
            expect(()=>erotus()).toThrow("parametri puuttuu")
        });
        const testiArvot = [
            [1], 
            ['a'], 
            ['']]
    
        test.each(testiArvot)('erotus(%s) aiheuttaa poikkeuksen "parametri puuttuu"', a => {
            expect(()=>erotus(a)).toThrow("parametri puuttuu")
        })
    });
    
    describe('4. Parametri ei numeerinen', ()=>{
        const testiArvot = [
            ['erotus("1", "2")', '1', '2'],
            ['erotus("a", 1)', 'a', 1],
            ['erotus(1, "a")', 1, 'a'],
            ['erotus("", "")', '', ''],
            ['erotus(null, 1)', null, 1],
            ['erotus(1, null)', 1, null],
            ['erotus(undefined, 1)', undefined, 1],
            ['erotus(1, undefined)', 1, undefined]
        ]
    
        test.each(testiArvot)('%s aiheuttaa poikkeuksen "vain numero sallittuja"', (a, b, c) => {
            expect(()=>erotus(b, c)).toThrow("vain numero sallittuja")
        })
    })
})
