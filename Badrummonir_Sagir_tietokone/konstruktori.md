# **constructor(jsondata)**
Alustaa Tietokonevarasto -olion

>Parametrit:
>>Parametri `jsondata` on oliolle välitettävä json-taulukko.

>Paluuarvo:
>>

>Poikkeukset:
>>Jos parametri puuttuu, konstruktori aiheuttaa poikkeuksen: `'tiedot puuttuvat'`

## Testit

### 1. Testataan puuttuvalla parametrilla
```js
new Tietokonevarasto()
```

aiheuttaa poikkeuksen:  `'tiedot puuttuvat'`