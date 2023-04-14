# Testitapaukset

### **haeTyypit()**

palauttaa kaikki puhelintyypit taulukossa lajiteltuna esiintymisjärjestyksessä. Tyyppi lisätään taulukkon vain kerran. Jos data ei sisällä puhelimia (puhelimet-kenttä puuttuu tai se on tyhä taulukko) tai henkilöitä, palautetaan tyhjä taulukko [].
Jos puhelimelta typpi on tyhjä merkkijono, ei tyyppiä lisätä taulukkoon, ei tyyppiä

Esimerkiksi:
```json
["koti", "työ", "mobiili"]
```

## Testit

### 1. Haetaan tyypit oletusdatalla

```js
rekisteri.haeTyypit();
```

### 2. Käytettään muokattua testidataa

#### testidata

```json
[
    {
        "etunimi":"Leila",
        "sukunimi":"Hökki",
        "puhelimet":[]
    },
    {
        "etunimi":"Matti",
        "sukunimi":"Puro",
    }
]
```

```js
rekisteri.haeTyypit();
```

palauttaa tyhjän taulukon [].

### 3. Testidata on tyhjä taulukko

#### Testidata
```json
[]
```

```js
rekisteri.haeTyypit();
```

palauttaa tyhjän taulukon []

### 4. Tyyppi, joka on tyhjä merkkijono, ei tule tulostaulukkoon

### testidata

```json
[
    {
        "etunimi":"Leila",
        "sukunimi":"Hökki",
        "puhelimet":[
            {"tyyppi":"", "numero":"12345678"},
            {"tyyppi":"työ", "numero":"87654321"},
            {"tyyppi":"työ", "numero":"050403020"}
        ]
    },
    {
        "etunimi":"Matti",
        "sukunimi":"Puro",
        "puhelimet":[
            {"tyyppi":"työ", "numero":"56789012"},
            {"tyyppi":"mobiili", "numero":"05012345"},
            {"tyyppi":"koti", "numero":"9876543"}
        ]
    }
]
```

```js
rekisteri.haeTyypit();
```


palauttaa:
```json
["työ", "mobilli", "koti"]
```

#### 5. jolatakin henkilöltä puhelimia puuttuu

#### testidata

```json
[
    {
        "etunimi":"Leila",
        "sukunimi":"Hökki",
        "puhelimet":[]
    },
    {
        "etunimi":"Veera",
        "sukunimi":"Puro",
        "puhelimet":[
            {"tyyppi":"työ", "numero":"111112222"}
        ]
    },
    {
        "etunimi":"Pirkko",
        "sukunimi":"Puro"
    },
    {
        "etunimi":"Meri",
        "sukunimi":"Myrkylä",
        "puhelimet":[
            {"tyyppi":"", "numero":"12345678"},
            {"tyyppi":"koti", "numero":"222333333"},
            {"tyyppi":"työ", "numero":"86767676767"}
        ]
    }
]
```

```js
rekisteri.haeTyypit();
```


palauttaa:
```json
["koti", "työ"]
```