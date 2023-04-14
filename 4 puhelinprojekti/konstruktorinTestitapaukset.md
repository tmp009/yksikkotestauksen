# Testitapaukset

### **konstruktori(data)**

Puehlinmuistio data annetaan parametrina konstruktorissa. Jos parametri puuttuu, aiheutuu poikkeus `'Parametri puuttuu'`

## Testit

### 1. Testataan puuttuvalla parametrilla

```js
new Puhelinmuisto();
```

aiheuttaa poikkeuksen: `'Parametri puuttuu'`

### Huom.

Periaatteessa olisi mahdollista testata myös onko parametrina annettu data sijoitettu olion kenttään, mutta tämä vaatisi tietoa olion sisäisestä toteutuksesta vaan testitapaukset perustuvat rajapintaan (API). Testauksessa ei pitäisi olettaa mitään toteuksesta. Tämä testatus tapahtuu muiden testien sivutuotteena.