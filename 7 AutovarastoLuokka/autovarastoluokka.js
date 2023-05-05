'use strict';

const fs = require('fs').promises;

module.exports = class Varasto{
    constructor(tiedostonNimi){
        this.tiedostonNimi=tiedostonNimi;
    }

    hae(avain,arvo){
        return new Promise(async (resolve, reject)=>{
            try {
                if(avain && arvo){
                    if (!['malli', 'rekisteri'].includes(avain)){
                        reject('avainta ei löydy');
                    }
                    else {
                        const autot = 
                            await JSON.parse(await fs.readFile(this.tiedostonNimi, 'utf-8'));
                        const loydetyt=[];
                        for(const kaara of autot){
                            if(kaara[avain]==arvo){
                                loydetyt.push(kaara);
                            }
                        }
                        resolve(loydetyt);
                    }
                }
                else {
                    reject('parametri puuttuu');
                }
            } catch (virhe) {
                reject('lukuvirhe: ', virhe.message);
            }
        });
    } // hae-metodin loppu
}