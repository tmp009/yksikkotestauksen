# **hae_tietokoneen_värit(hakuavain)**
hakee tietokoneen hakuarvona annetulla perusavaimella ID ja palauttaa tietokoneen värit-taulukon. Jos värit-taulukkoa ei löydy tai se on tyhjä, palautetaan tyhjä taulukko

>Parametrit:
>>hakuavain on haettavan tietokoneen perusavain ID

>Paluuarvo:
>>palauttaa värit-taulukon. Jos värit-taulukkoa ei löydy tai se on tyhjä, tai parametri hakuavain puuttuu, palautetaan tyhjä taulukko

>Poikkeukset:
>>

## Testit

Testidata:
```json
[
        {
          "ID": 1,
          "merkki": "BigFlop Mark II",
          "tyyppi": "pelikone",
          "hinta": 36,
          "lukumäärä": 7,
          "lisätiedot": {
            "malli": "GT",
            "energialuokka": "B",
            "kommentti": "ei huomauttamista"
          }
        },
        {
          "ID": 2,
          "merkki": "Hirmu II",
          "tyyppi": "pelikone",
          "hinta": 25,
          "lukumäärä": 30,
          "värit": [],
          "lisätiedot": {
            "malli": "gold",
            "energialuokka": "A",
            "kommentti": "-"
          }
        },
        {
          "ID": 3,
          "merkki": "MaxEffect 2000",
          "tyyppi": "pöytäkone",
          "hinta": 300,
          "lukumäärä": 150,
          "värit": [
            "valkoinen",
            "punainen",
            "vihreä"
          ],
          "lisätiedot": {
            "malli": "XL",
            "energialuokka": "A+",
            "kommentti": "huippulaite"
          }
        },
        {
          "ID": 4,
          "merkki": "Xunil 4.7",
          "tyyppi": "palvelin",
          "hinta": 700,
          "lukumäärä": 13,
          "värit": [
            "oranssi",
            "punainen",
            "valkoinen"
          ],
          "lisätiedot": {
            "malli": "XL",
            "energialuokka": "E",
            "kommentti": "-"
          }
        },
        {
          "ID": 5,
          "merkki": "BigFlop Mark II",
          "tyyppi": "kannettava",
          "hinta": 300,
          "lukumäärä": 15,
          "värit": [
            "punainen",
            "valkoinen",
            "keltainen"
          ]
        }
    ]
```

### 1. Hae ID 3:n värit

```js
varasto.hae_tietokoneen_värit(3);
```

palauttaa: 
```js
["valkoinen", "punainen", "vihreä"]
```

### 2. Väri taulokko on tyhjä

```js
varasto.hae_tietokoneen_värit(2);
```

palauttaa: 
```js
[]
```

### 3. Väri taulokko ei olemassa

```js
varasto.hae_tietokoneen_värit(1);
```

palauttaa: 
```js
[]
```

### 4. ilman parametri

```js
varasto.hae_tietokoneen_värit();
```

palauttaa: 
```js
[]
```