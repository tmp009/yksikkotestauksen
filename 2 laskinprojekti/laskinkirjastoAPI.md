# Laksinkirjasto API

## **summa(a, b)**

Funktio palautaa kahden parametrina annettujen summan.

Parametrit: a ja b ovat numeroita
Palauttaa a:n ja b:n summan

-   jos parametri puuttuu, aiheuttaa poikkeuksen: `'parametri puuttuu'`
-   jos kummatikin parametrit on annettu, mutta parametri ei ole numero, 
    aiheutuu poikkeus: `'vain numero sallittuja'`


## Testitapaukset
#### 1. testataan kokonaisluvuilla

- summa(1, 1) palauttaa 2
- summa(2, 3) palauttaa 5
- summa(12, 100) palauttaa 112

[2, -4, -2],
[-4, 6, 2],
[-3, -5, -8],
[0, 0, 0],
[0, 3, 3],
[3, 0, 3],
[0, -3, -3],
[-3, 0, -3],
[5, -5, 0]

#### 2. testataan desimaaliluvulla
[10, 11.5, 21.5],
[2.5, 3, 5.5],
[-2.5, 3, 0.5],
[2.5, -3, -0.5],
[-2.5, 2.5, 0],
[-2.5, -2.5, -5.0],
[2.4, -2.5, -0.1]

#### 3. Parametri puuttuu
- summa() aiheuttaa poikkeuksen `'parametri puuttuu'`
- summa(1) aiheuttaa poikkeuksen `'parametri puuttuu'`
- summa('a') aiheuttaa poikkeuksen `'parametri puuttuu'`
- summa('') aiheuttaa poikkeuksen `'parametri puuttuu'`

#### 4. Parametri ei numeerinen
- summa('1', '2') aiheuttaa poikkeuksen `'vain numero sallittuja'`
- summa('a', 1) aiheuttaa poikkeuksen `'vain numero sallittuja'`
- summa(1, 'a') aiheuttaa poikkeuksen `'vain numero sallittuja'`
- summa('a', 'a') aiheuttaa poikkeuksen `'vain numero sallittuja'`
- summa('', '') aiheuttaa poikkeuksen `'vain numero sallittuja'`

- summa(null, 1) aiheuttaa poikkeuksen `'vain numero sallittuja'`
- summa(1, null) aiheuttaa poikkeuksen `'vain numero sallittuja'`
- summa(undefined, 1) aiheuttaa poikkeuksen `'vain numero sallittuja'`
- summa(1, undefined) aiheuttaa poikkeuksen `'vain numero sallittuja'`

## **erotus(a, b)**

Funktio palautaa kahden parametrina annettujen erotus.

Parametrit: a ja b ovat numeroita
Palauttaa a:n ja b:n erotus

-   jos parametri puuttuu, aiheuttaa poikkeuksen: `'parametri puuttuu'`
-   jos kummatikin parametrit on annettu, mutta parametri ei ole numero, 
    aiheutuu poikkeus: `'vain numero sallittuja'`

## Testitapaukset
#### 1. testataan kokonaisluvuilla

- erotus(1, 1) palauttaa 0
- erotus(2, 3) palauttaa -1
- erotus(100, 12) palauttaa 88

[2, -4, 6],
[4, 4, 0],
[3, 5, -2],
[0, 0, 0],
[0, 3, -3],
[3, 0, 3],
[0, -3, 3],
[-3, 0, -3],
[5, -5, 10]

#### 2. testataan desimaaliluvulla
[10, 11.5, 1.5],
[2.5, 3, -0.5],
[-2.5, 3, -5.5],
[2.5, -3, 5.5],
[2.5, 2.5, 0],
[-2.5, -2.5, 5],
[2.4, -2.5, 4.9]

#### 3. Parametri puuttuu
- erotus() aiheuttaa poikkeuksen `'parametri puuttuu'`
- erotus(1) aiheuttaa poikkeuksen `'parametri puuttuu'`
- erotus('a') aiheuttaa poikkeuksen `'parametri puuttuu'`
- erotus('') aiheuttaa poikkeuksen `'parametri puuttuu'`

#### 4. Parametri ei numeerinen
- erotus('1', '2') aiheuttaa poikkeuksen `'vain numero sallittuja'`
- erotus('a', 1) aiheuttaa poikkeuksen `'vain numero sallittuja'`
- erotus(1, 'a') aiheuttaa poikkeuksen `'vain numero sallittuja'`
- erotus('a', 'a') aiheuttaa poikkeuksen `'vain numero sallittuja'`
- erotus('', '') aiheuttaa poikkeuksen `'vain numero sallittuja'`

- erotus(null, 1) aiheuttaa poikkeuksen `'vain numero sallittuja'`
- erotus(1, null) aiheuttaa poikkeuksen `'vain numero sallittuja'`
- erotus(undefined, 1) aiheuttaa poikkeuksen `'vain numero sallittuja'`
- erotus(1, undefined) aiheuttaa poikkeuksen `'vain numero sallittuja'`