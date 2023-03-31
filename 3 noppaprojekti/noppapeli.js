'use strict';

const {Noppa} = require("./noppa.js");

const noppaA = new Noppa();
const noppaB = new Noppa();

noppaA.heitaNoppaa()
noppaB.heitaNoppaa()

noppaB.silmaluku = 6

console.log(`NoppaA: ${noppaA}`)
console.log(`NoppaB: ${noppaB}`)

if (noppaA.pisteet === noppaB.pisteet) {
    console.log('tasapeli')
}
else if (noppaA.pisteet > noppaB.pisteet) {
    console.log('NoppaA voittaa')

}
else {
    console.log('NoppaB voittaa')

}

const raha = new Noppa(2);
raha.heitaNoppaa()

console.log(`Sait ${raha.pisteet === 1 ? 'Kruunan' : 'klaavan'}`)