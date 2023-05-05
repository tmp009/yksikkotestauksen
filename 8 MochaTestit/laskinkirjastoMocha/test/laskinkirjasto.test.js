'use strict';

const expect = require('chai').expect;

const { summa, erotus } = require('../laskinkirjasto');
const laskin = require('../laskinkirjasto');

describe('Testataan että funktio on määritelty', function () {
    it('laskin.summa on funktio', function (){
        expect(laskin.summa).to.be.a('function');
    });

    it('summa on funktio', function () {
        expect(summa).to.be.a('function');
    });
})

describe('Testataan summaa yksittäin', function () {
    it('summa(1,1)=2', function () {
        expect(summa(1,1)).to.equal(2);
    });
    it('laskin.summa(1,1)=2', function () {
        expect(laskin.summa(1,1)).to.equal(2);
    });

    it('summa(2,3)=5', function () {
        expect(summa(2,3)).to.equal(5);
    });
    it('summa(12,100)=112', function () {
        expect(summa(12,100)).to.equal(112);
    });
})

describe('testataan taulukossa olevilla testitapauksilla', function(){
    const testiArvot=[
        {a:2, b:-4, odotettu:-2},
        {a:-4, b:6, odotettu:2},
        {a:-3, b:-5, odotettu:-8},
        {a:0, b: 0, odotettu:0},
        {a:0, b:3, odotettu:3},
        {a:3, b:0, odotettu:3},
        {a:0, b:-3, odotettu:-3},
        {a:5, b:-5, odotettu:0}
    ]

    testiArvot.forEach(function (arvo) {
       it(`summa(${arvo.a},${arvo.b})=${arvo.odotettu}`, function(){
            expect(summa(arvo.a,arvo.b)).to.equal(arvo.odotettu);
       }) 
    });
});

describe('testataan taulukossa olevilla testitapauksilla V2', function(){
    const testiArvot=[
        {a:2, b:-4, odotettu:-2},
        {a:-4, b:6, odotettu:2},
        {a:-3, b:-5, odotettu:-8},
        {a:0, b: 0, odotettu:0},
        {a:0, b:3, odotettu:3},
        {a:3, b:0, odotettu:3},
        {a:0, b:-3, odotettu:-3},
        {a:5, b:-5, odotettu:0}
    ]

    for(const arvo of testiArvot) {
       it(`summa(${arvo.a},${arvo.b})=${arvo.odotettu}`, function(){
            expect(summa(arvo.a,arvo.b)).to.equal(arvo.odotettu);
       }) 
    };
});

describe('testataan taulukossa olevilla arvoilla jestmäisesti', function(){
    const testiArvot=[
        [2, -4, -2],
        [-4, 6, 2],
        [-3, -5, -8],
        [0, 0, 0],
        [0, 3, 3],
        [3, 0, 3],
        [0, -3, -3],
        [-3, 0, -3],
        [5, -5, 0]
    ];

    testiArvot.forEach(function (arvo) {
        it(`summa(${arvo[0]},${arvo[1]})=${arvo[2]}`, function(){
             expect(summa(arvo[0],arvo[1])).to.equal(arvo[2]);
        }) 
     });
});
