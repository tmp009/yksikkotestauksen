# Testitapaukset

### **haeHenkilönNumerotTyypilla(etunimi, sukunimi, tyyppi)**

palauttaa taulukon, jossa on annetun henkilön annetun tyyppiset numerot.

jos annetulla nimellä ei löydy henkilöä. palauttaa []
jos annetulla tyypillä ei löydy numero, palauttaa []
jos yksikin parametri puutuu, aiheuttaa poikkeuksen `'Parametri puuttuu'`

Esimerkiksi Leila Hökin työnumerot

```js
muistio.haeHenkilönNumerotTyypilla('Leila', 'Hökki', 'työ');
```
```json
["87654321", "050403020"]
```

## Testit

Ennen kaikkia testejä luodaan muistio oletusdatalla.

### 1. haetaan Leila Hökin työnumerot

```js
    muistio.haeHenkilönNumerotTyypilla('Leila', 'Hökki', 'työ');
```

```json
["87654321", "050403020"]
```

### 2.  haetaan Matti Puron mobiilinumero

```js
    muistio.haeHenkilönNumerotTyypilla('Matti', 'Puro', 'mobiili');
```

```json
["05012345"]
```

### 3. haetaan Leila Hökin kotinumero

```js
    muistio.haeHenkilönNumerotTyypilla('Leila', 'Hökki', 'koti');
```

```json
["12345678"]
```

### 4. Väärä tyyppi tai nimi palauttaa tyhjän taulukon

```js
    muistio.haeHenkilönNumerotTyypilla('Matti', 'Puro', 'x');
    muistio.haeHenkilönNumerotTyypilla('Matti', 'x', 'mobiili');
    muistio.haeHenkilönNumerotTyypilla('x', 'Puro', 'mobiili');
```
palauttaa []

### 5. Parametrit puuttuu
```js
    muistio.haeHenkilönNumerotTyypilla('Matti', 'Puro');
    muistio.haeHenkilönNumerotTyypilla('Matti');
    muistio.haeHenkilönNumerotTyypilla();
```

aiheuttaa poikkeuksen:  `'Parametri puuttuu'`