# Noppa -luokka API


Noppa-luokka noppapelejä varten. Noppa tallettaa silmäluvun, joka voi olla välillä 
1 <= silmäluku <= yläraja. Yläraja annetaan konstruktorille parametrina. Suurin salittu yläraja on 20. Minimi yläraja on 2. Yläraja pitää olla kokonaisluku. Jos ei anneta, luodaan noppa ylärajalla 6.

Jos noppa ei ole heitetty, niin silmäluku on nolla 0. Kun noppa on kerran heitetty, ei silmäluku voi tulla enää nollaksi.

## **Toiminnot**

### Konstruktori

- alustaa nopan annetulla ylärajalla.
- jos yläraja ei annetan, käytetään oletusylärajana lukua 6
- alustaa nopan silmäluvun nollaksi 0

- jos yläraja ei ole kokonaisluku, aiheutuu poikkeus `'Yläraja pitää olla kokonaisluku'`
- jos yläraja ei ole välillä 2..20, aiheutuu poikkeus:
    - yläraja >20: `'Yläraja liian iso'`
    - yläraja <2: `'Yläraja liian pieni'`

### **Metodit**

#### **heitaNoppaa()**

-   heittää nopan. Kun noppa heitetään, niin silmäluvuksi tulee satunnaisluku väliltä 1...yläraja
-   ei paluta mitään

#### **toString()**
-   palautaa nopan silmäluvun merkkijonona. Esimerkiksi `'4'`
-   jos noppaa ei ole heitetty, palautaa merkkijonon: `'Noppaa ei ole heitetty'`

### **Getterit**

#### **pisteet**
-   palauttaa nopan silmäluvun

#### **minimi**
-   palauttaa pienimmän mahdollisen silmäluvun. Tässä 1

#### **maksimi**
-   palauttaa suurimman mahdollisen silmäluvun eili ylärajan.