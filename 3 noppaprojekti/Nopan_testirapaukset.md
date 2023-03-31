# Nopan testitapaukset

## konstruktori
-   Noppa() palauttaa Noppa-olio oletus ylärajana 6.
-   Noppa(2...20) palauttaa Noppa-olio ylärajana 2..20

-   Noppa(21) aiheuttaa poikkeuksen  `'Yläraja liian iso'`
-   Noppa(99) aiheuttaa poikkeuksen  `'Yläraja liian iso'`
-   Noppa(1) aiheuttaa poikkeuksen  `'Yläraja liian pieni'`
-   Noppa(0) aiheuttaa poikkeuksen  `'Yläraja liian pieni'`
-   Noppa(-1) aiheuttaa poikkeuksen  `'Yläraja liian pieni'`

-   Noppa(2.5) aiheutuu poikkeus `'Ylärajan pitää olla kokonaisluku'`
-   Noppa(-2.5) aiheutuu poikkeus `'Ylärajan pitää olla kokonaisluku'`
-   Noppa("a") aiheutuu poikkeus `'Ylärajan pitää olla kokonaisluku'`


## **heitaNoppaa()**
1. luodaan noppa oletusylärajalla (ylärakasi tulee 6)
    -   heitetään noppaa
    -   kun noppa on heitetty, tarkistetaan, että pisteet on minmin ja maksimin välissä

2. luodaan noppa ylärajalla 2...20 ja heitetään sitä
    -   kun noppa on heitetty, tarkistetaan, että pisteet on minmin ja maksimin välissä

## **toString()**

kummassakin testissä luodaan noppa esin
(tehdään ilman ylärajaa)

1. heitetään noppaa. Tarkastetaan, että pisteet on sama kuin merkkijononq palautettu arvo
2. ei heitetä noppaa, jolloin palautuu teksti `'Noppaa ei ole heitetty'`

## **pisteet**
luo noppa
tarkistetaan onko määriteltty

## **minimi**
luo noppa
tarkistetaan onko määriteltty


## **maksimi**
luo noppa
tarkistetaan onko määriteltty