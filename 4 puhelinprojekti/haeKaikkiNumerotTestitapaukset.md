# Testitapaukset

### **haeKaikkiNumerot()**

Palauttaa kaikki puhelinnumerot taulukossa, jossa jokaisen henkilön numerot ovat muodossa

```json
{ "etunimi":"Leila", "sukunimi":"Hökki", "puhelimet":[] }
```
missä puhelin on muotoa:
```json
{"tyyppi":"", "numero":""}
```

Jos henkilöllä ei ole puhelinta (puhelimet-kenttä puuttuu tai se on tyhä taulukko), ei henkilö lisätä palautettavaan taulukkoon

Jos kaikki puhelimet puuttuvat, palautetaan tyhjä taulukko
Jos kaikki henkilöt puuttuvat, palautetaan tyhjä taulukko

## Testit