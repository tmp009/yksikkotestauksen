### **hae_tietokone_perusavaimella_ID(hakuavain)**
Etsii tietovarastosta olion, jonka perusavain on sama kuin  parametrina annettu `hakuavain`. Perusavain on yksilöivä.

>Parametrit:
>>hakuavain on haettavan tietokoneen perusavain ID

>Paluuarvo:
>>palauttaa tietokone -olion, jonka ID on sama kuin annettu hakuavain tai null, jos hakuavaimella ei löydy tietokone -oliota

>Poikkeukset:
>>Jos parametri puuttuu, metodi aiheuttaa poikkeuksen: `'parametri puuttuu'`

## Testit

### 1. Hae kone ID 1

```js
varasto.hae_tietokone_perusavaimella_ID(1);
```

palauttaa:
```json
{
    "ID": 1,
    "merkki": "BigFlop Mark II",
    "tyyppi": "pelikone",
    "hinta": 36,
    "lukumäärä": 7,
    "värit": [
        "oranssi",
        "musta",
        "punainen"
    ],
    "lisätiedot": {
        "malli": "GT",
        "energialuokka": "B",
        "kommentti": "ei huomauttamista"
    }
}
```

### 2. Hae kone, joka ei ole tietovarastossa
```js
varasto.hae_tietokone_perusavaimella_ID(999);
```

palauttaa: null

### 3. Puutuva parametri aiheuttaa poikeuksen

```js
varasto.hae_tietokone_perusavaimella_ID();
```

aiheuttaa poikeuksen: `'parametri puuttuu'`