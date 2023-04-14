# Testitapaukset

### **haeHenkilönNumerotTyypilla(etunimi, sukunimi, tyyppi)**

palauttaa taulukon, jossa on annetun henkilön annetun tyyppiset numerot.

jos annetulla nimellä ei löydy henkilöä. palauttaa []
jos annetulla tyypillä ei löydy numero, palauttaa []
jos yksikin parametri puutuu, aiheuttaa poikkeuksen `'Parametri puuttuu'`

Esimerkiksi Test Person

```js
muistio.haeHenkilönNumerotTyypilla('Leila', 'Hökki', 'työ');
```
```json
["87654321", "050403020"]
```

## Testit