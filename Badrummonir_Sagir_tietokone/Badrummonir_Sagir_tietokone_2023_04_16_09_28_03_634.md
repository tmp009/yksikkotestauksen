Sagir Badrummonir


# **Lopputehtävä** (tietokone)



## Tehtävä: Luo ja testaa **Tietokonevarasto** -luokka
Luo luokka `Tietokonevarasto`. Luokassa on metodit tietokonetietojen käyttöön. Käytettävä tietovarasto välitetään oliolle konstruktorin parametrina. Tiedot ovat json-taulukossa. Käytä seuraavaa json-taulukkoa oletusdatana. Täydennä taulukkoa tarvittaessa tai tee testausta varten tarvittavat vaihtoehtoiset versiot. 

### tietovarasto.json

```json
[
  {
    "ID": 1,
    "merkki": "BigFlop Mark II",
    "tyyppi": "pelikone",
    "hinta": 36,
    "lukumäärä": 7,
    "värit": [
      "oranssi",
      "musta",
      "punainen"
    ],
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
    "värit": [
      "oranssi",
      "punainen",
      "valkoinen"
    ],
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


# Tietokonevarasto - rajapinta (API)

## konstruktori

### **constructor(jsondata)**
Alustaa Tietokonevarasto -olion

>Parametrit:
>>Parametri `jsondata` on oliolle välitettävä json-taulukko.

>Paluuarvo:
>>

>Poikkeukset:
>>Jos parametri puuttuu, konstruktori aiheuttaa poikkeuksen: `'tiedot puuttuvat'`

## Metodit

### **hae_tietokoneen_lukumäärä_avaimella_merkki(hakuarvo)**
hakee tietokoneen tiedon lukumäärä, kun tietokoneen merkki on sama kuin annettu hakuarvo. Jos tietokone löytyy, on palautettava arvo tietokoneen lukumäärä, muuten palautetaan null

>Parametrit:
>>hakuarvo on tietokoneen merkki

>Paluuarvo:
>>palauttaa hakuarvoa merkki vastaavan tietokoneen lukumäärä tiedon. Jos hakuarvolla ei löydy tietokone-oliota, palautetaan null

>Poikkeukset:
>>Jos parametri hakuarvo puuttuu, metodi aiheuttaa poikkeuksen: `'parametri puuttuu'`

### **hae_tietokoneen_värit(hakuavain)**
hakee tietokoneen hakuarvona annetulla perusavaimella ID ja palauttaa tietokoneen värit-taulukon. Jos värit-taulukkoa ei löydy tai se on tyhjä, palautetaan tyhjä taulukko

>Parametrit:
>>hakuavain on haettavan tietokoneen perusavain ID

>Paluuarvo:
>>palauttaa värit-taulukon. Jos värit-taulukkoa ei löydy tai se on tyhjä, tai parametri hakuavain puuttuu, palautetaan tyhjä taulukko

>Poikkeukset:
>>

### **hae_tietokoneiden_kokonaishinta_hakuehdolla_tyyppi(hakuarvo)**
Hakee kaikkien niiden tietokoneiden yhteishinnan, joilla on sama tyyppi

>Parametrit:
>>tyyppi, jonka perusteella tietokoneiden hinnat lasketaan yhteen

>Paluuarvo:
>>tietokoneiden yhteenlaskettu kokonaishinta

>Poikkeukset:
>>Jos hakuarvolla ei löydy mitään, metodi aiheuttaa poikkeuksen: `'annetulla avaimella ei löytynyt tietoja'`. Jos parametri hakuarvo puuttuu, metodi aiheuttaa poikkeuksen: `'parametri puuttuu'`

### **hae_tietokone_perusavaimella_ID(hakuavain)**
Etsii tietovarastosta olion, jonka perusavain on sama kuin  parametrina annettu `hakuavain`. Perusavain on yksilöivä.

>Parametrit:
>>hakuavain on haettavan tietokoneen perusavain ID

>Paluuarvo:
>>palauttaa tietokone -olion, jonka ID on sama kuin annettu hakuavain tai null, jos hakuavaimella ei löydy tietokone -oliota

>Poikkeukset:
>>Jos parametri puuttuu, metodi aiheuttaa poikkeuksen: `'parametri puuttuu'`

### **hae_lisätiedot(hakuavain)**
palauttaa annetulla hakuavaimella olevan tietokoneen lisätiedot -olion

>Parametrit:
>>hakuavain on haettavan tietokoneen perusavain ID

>Paluuarvo:
>>palauttaa lisätiedot -olion tai null, jos hakuavaimella ei löydy tietokone -oliota tai jos hakuavain puuttuu

>Poikkeukset:
>>

# Projekti

## Luo kansio testiprojektille
- nimeä kansio nimellä `Badrummonir_Sagir_tietokone`
- luo **package.json**
  - **`npm init -y`**
- asenna **jest** kehitysriippuvuudeksi
  - **`npm install jest --save-dev`**
- tee testikansio `__tests__` testeille
- muokkaa **package.json** lisäämällä `jest` `test`-scriptiin
- käytä tiedonlähteenä tiedostoa **tietovarasto.json** 

## Tee rajapintakuvauksen mukaiset testitapaukset projektikansioon Markdown-tiedostoon

Aloita tekemällä testitapaukset. Tee testitapaukset edellä olevien rajapintakuvausten mukaan. Käytä myös "mielikuvitusta" erilaisten tilanteiden löytämiseksi testitapaukset ovat sinun tulkintasi rajapinnasta.Tässä ei ole oikeita tai vääriä vastauksia.

## Tee testit ja tarkasta, että ne eivät mene läpi
## Toteuta metodit
## Testaa toteutusta ajamalla testit kunnes ne menee läpi

## Palauta projektikansio
Palauta projektikansio erikseen annettavien ohjeiden mukaan. Poista `node_modules` kansio ennen lähettämistä. Palauta projektikansiossa myös `package.json`. tiedosto.
