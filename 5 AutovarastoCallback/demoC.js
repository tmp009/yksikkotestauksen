'use strict';
// const hae = require('./autovarastoA.js');
const hae = require('./autovarastoBCallbackV2.js');

hae(null,null,console.log);
console.log('eka');
hae('malli', 'Hoppa', console.log);
console.log('toka');
hae('rekisteri', 'ÅL-23', data=>console.log(data));
console.log('kolmas');
hae('malli', 'Kaara', tulostaData);
console.log('neljäs');

function tulostaData(data) {
    console.log('#############');
    console.log(data);
    console.log('#############');
}