'use strict';

const Varasto = require('./autovarastoluokka');

const autovarasto=new Varasto('./autot.json');

autovarasto.hae('malli', 'Hoppa')
    .then(console.log)
    .catch(console.log);