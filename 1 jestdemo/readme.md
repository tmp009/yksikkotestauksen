# Jest projekti

## 1. luo projektikansio

## 2. luo package.json
```shell
npm init -y
```
tai
```shell
npm init
```
ja vastataan kysymyksiin

tai kokonaan manuaalisesti

## 3. Asennetaan jest kehitysriippuvuudeksi (devDependencies)
```shell 
npm install jest --save-dev
```

## 4. Muokataan package.jsonin test-scriptiä
```json
"scripts": {
    "test": "jest"
}
```
## 5. Luo testejä varten kansio `__tests__`
(alaviiva alaviiva tests alaviiva alaviiva)

# 6. kirjoita testit

tiedoston nimessä on `test`
esim.

`summa.test.js`

# 7. aja testit
```shell
npm test
```

### 7b ajetaan vain yksi testitiedosto
```shell
npm test --testFile testitiedosto.test.js
```