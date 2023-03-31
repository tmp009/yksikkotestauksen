"use strict";

const apu = new Array(19).fill(2)
console.log(apu)

const mapatty = apu.map((arvo, ind) => [arvo + ind])
console.log(mapatty)