# **hae_lisätiedot(hakuavain)**
palauttaa annetulla hakuavaimella olevan tietokoneen lisätiedot -olion

>Parametrit:
>>hakuavain on haettavan tietokoneen perusavain ID

>Paluuarvo:
>>palauttaa lisätiedot -olion tai null, jos hakuavaimella ei löydy tietokone -oliota tai jos hakuavain puuttuu

>Poikkeukset:
>>

## Testit

### 1. Hae kone ID 4 lisätiedot

```js
varasto.hae_lisätiedot(4);
```

palauttaa:
```json
{
    "malli": "XL",
    "energialuokka": "E",
    "kommentti": "-"
}
```

### 2. Hae kone ID 2 lisätiedot

```js
varasto.hae_lisätiedot(2);
```

palauttaa:
```json
{
    "malli": "gold",
    "energialuokka": "A",
    "kommentti": "-"
}
```

### 3. Hae kone ID 5, jossa ei ole lisätiedot

```js
varasto.hae_lisätiedot(5);
```

palauttaa: null

### 4. Hae lisätiedot ilman hakuavain

```js
varasto.hae_lisätiedot();
```

palauttaa: null