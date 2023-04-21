# **hae_tietokoneiden_kokonaishinta_hakuehdolla_tyyppi(hakuarvo)**
Hakee kaikkien niiden tietokoneiden yhteishinnan, joilla on sama tyyppi

>Parametrit:
>>tyyppi, jonka perusteella tietokoneiden hinnat lasketaan yhteen

>Paluuarvo:
>>tietokoneiden yhteenlaskettu kokonaishinta

>Poikkeukset:
>>Jos hakuarvolla ei löydy mitään, metodi aiheuttaa poikkeuksen: `'annetulla avaimella ei löytynyt tietoja'`. Jos parametri hakuarvo puuttuu, metodi aiheuttaa poikkeuksen: `'parametri puuttuu'`

## Testit

### 1. Hae "pelikone" kokonaishinta

```js
varasto.hae_tietokoneiden_kokonaishinta_hakuehdolla_tyyppi("pelikone");
```

palauttaa: 61

## 2. Hae "pöytäkone" kokonaishinta

```js
varasto.hae_tietokoneiden_kokonaishinta_hakuehdolla_tyyppi("pöytäkone");
```

palauttaa: 300

## 3. Aiheuttaa poikkeuksen "annetulla avaimella ei löytynyt tietoja"

```js
varasto.hae_tietokoneiden_kokonaishinta_hakuehdolla_tyyppi("x");
```

aiheuttaa poikeuksen: `'annetulla avaimella ei löytynyt tietoja'`

## 4. Puutuva parametri aiheuttaa poikeuksen

```js
varasto.hae_tietokoneiden_kokonaishinta_hakuehdolla_tyyppi();
```

aiheuttaa poikeuksen:  `'parametri puuttuu'`
