# **hae_tietokoneen_lukumäärä_avaimella_merkki(hakuarvo)**
hakee tietokoneen tiedon lukumäärä, kun tietokoneen merkki on sama kuin annettu hakuarvo. Jos tietokone löytyy, on palautettava arvo tietokoneen lukumäärä, muuten palautetaan null

>Parametrit:
>>hakuarvo on tietokoneen merkki

>Paluuarvo:
>>palauttaa hakuarvoa merkki vastaavan tietokoneen lukumäärä tiedon. Jos hakuarvolla ei löydy tietokone-oliota, palautetaan null

>Poikkeukset:
>>Jos parametri hakuarvo puuttuu, metodi aiheuttaa poikkeuksen: `'parametri puuttuu'`

## Testit

Käytetään kaikissa oletusvarasto

```js
const varasto = new Tietokonevarasto(tietovarasto);
```

### 1. Hae "BigFlop Mark II"

```js
varasto.hae_tietokoneen_lukumäärä_avaimella_merkki("BigFlop Mark II");
```

palauttaa: 22

### 2. Hae "MaxEffect 2000"

```js
varasto.hae_tietokoneen_lukumäärä_avaimella_merkki("MaxEffect 2000");
```

palauttaa: 150

### 3. Hae "x"

```js
varasto.hae_tietokoneen_lukumäärä_avaimella_merkki("x");
```

palauttaa: null

### 4. Puutuva parametri aiheuttaa poikeuksen

```js
varasto.hae_tietokoneen_lukumäärä_avaimella_merkki();
```

palauttaa:  `'parametri puuttuu'`