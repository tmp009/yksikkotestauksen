'use strict';

const fs = require('fs');
const tiedostonNimi='./autot.json';
//cbf = callback funktio
module.exports = (cbf,avain, arvo)=>{
    if(typeof cbf !== 'function') {
        throw new Error('callback funktio puuttui');
    }
    fs.readFile(tiedostonNimi, 'utf-8', (err,data)=>{
        if(err){
            cbf(err);
        }
        else{
            let loydetyt=[];
            const autot = JSON.parse(data);
            if(avain && arvo && ['malli', 'rekisteri'].includes(avain)){
                for (const kaara of autot) {
                    if(kaara[avain]===arvo){
                        loydetyt.push(kaara);
                    }
                }
            }
            else {
                loydetyt=autot;
            }
            return cbf(loydetyt);
        }
    })
}