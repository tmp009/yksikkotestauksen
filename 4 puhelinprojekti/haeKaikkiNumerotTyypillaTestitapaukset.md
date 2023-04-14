# Testitapaukset

### **haeKaikkiNumerotTyypilla(tyyppi)**

palauttaa taulukon olioita. Oliossa on nimitiedot ja puhelinumero muodossa:

```json
[
    {"etunimi":"", "sukunimi":"","numero":{"tyyppi":"","puh":""}},
    {"etunimi":"", "sukunimi":"","numero":{"tyyppi":"","puh":""}}
]
```

Jos henkilöllö on samantyyppisiä numeroita useampia, tulee taulukoon kustakin oma olio

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

