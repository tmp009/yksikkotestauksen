# Testitapaukset

### **haeKaikkiNumerotTyypilla(tyyppi)**

palauttaa taulukon olioita. Oliossa on nimitiedot ja puhelinumero muodossa:

```json
[
    {"etunimi":"", "sukunimi":"","numero":{"tyyppi":"","puh":""}},
    {"etunimi":"", "sukunimi":"","numero":{"tyyppi":"","puh":""}}
]
```

Jos henkilöllö on samantyyppisiä numeroita useampia, tulee taulukoon kustakin oma olio.

Jos annetun tyyppiä ei löydy, palauttaa tyhjän taulukon

Jos parametri puuttuu, aiheutuu poikkeus `'Parametri puuttuu'`.

Esimerkiksi kaikki työnumerot:

```json
[
    {"etunimi":"Leila", "sukunimi":"Hökki","numero":{"tyyppi":"työ","puh":"87654321"}},
    {"etunimi":"Leila", "sukunimi":"Hökki","numero":{"tyyppi":"työ","puh":"050403020"}},
    {"etunimi":"Matti", "sukunimi":"Puro","numero":{"tyyppi":"työ","puh":"56789012"}}

]
```

## Testit

ennen kaikkia testejä luodaan muistio

### 1. Haetaan työnumerot 

```js
muistio.haeKaikkiNumerotTyypilla('työ');
```
Palauttaa

```json
[
    {"etunimi":"Leila", "sukunimi":"Hökki","numero":{"tyyppi":"työ","puh":"87654321"}},
    {"etunimi":"Leila", "sukunimi":"Hökki","numero":{"tyyppi":"työ","puh":"050403020"}},
    {"etunimi":"Matti", "sukunimi":"Puro","numero":{"tyyppi":"työ","puh":"56789012"}}

]
```


### 2. Haetaan kotinumero 

```js
muistio.haeKaikkiNumerotTyypilla('koti');
```

Palauttaa
```json
[
    {"etunimi":"Leila", "sukunimi":"Hökki","numero":{"tyyppi":"koti","puh":"12345678"}},
    {"etunimi":"Matti", "sukunimi":"Puro","numero":{"tyyppi":"koti","puh":"9876543"}}
]
```
### 3. Haetaan mobiilinumero 

```js
muistio.haeKaikkiNumerotTyypilla('mobiili');
```

Palauttaa
```json
[
    {"etunimi":"Leila", "sukunimi":"Hökki","numero":{"tyyppi":"mobiili","puh":"05012345"}}
]
```

### 4. Haetaan olematomalla 
```js
muistio.haeKaikkiNumerotTyypilla('x');
```

Palauttaa
```json
[]
```

### 5. parametri puuttuu aiheuttaa poikkeuksen

```js
muistio.haeKaikkiNumerotTyypilla();
```

aiheuttaa poikkeuksen:  `'Parametri puuttuu'`