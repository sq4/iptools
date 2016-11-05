# IPtools for NodeJS
IPtools is voor het converteren van ip naar long, en long naar ip. 

Maar ook voor het checken of een ip in een route: / CIDS past ... 

## voorbeeld
```javascript
var ipt=require("iptools");
console.log(ipt.iptoLong( "192.168.1.1" ));  	// returns 3232235777
console.log(ipt.fromLong( 3232235777 )); 		// returns 192.168.1.1
console.log(ipt.inSubNet( "77.247.181.162","77.247.176.0/21" )); 	// returns TRUE
console.log(ipt.inSubNet( "178.217.187.39","178.217.184.0/21" )); 	// returns TRUE
console.log(ipt.inSubNet( "177.247.181.162","77.247.176.0/21" )); 	// returns FALSE
console.log(ipt.inSubNet( "218.217.187.39","178.217.184.0/21" )); 	// returns FALSE
```
## To do

- [ ] BanList
- [ ] WhiteList
- [ ] TrustedList

