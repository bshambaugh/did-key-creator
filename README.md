# did:key creator
Still work in progress.

## Reference
This has been tested to create did:keys from the P-256 curve like in https://github.com/w3c-ccg/did-method-key
and https://w3c-ccg.github.io/did-method-key/ .

## Standard Use: 

### Compressed 33 Byte Key code example for P-256 key (using elliptic npm module):
```
import * as name from '../did-key-creator/lib/encodeDIDkey.js'
import * as utils from '../did-key-creator/lib/utils.js'
import u8a from 'uint8arrays'
import ec from 'elliptic'
var EC = ec.ec;

const  ecurve = new EC('p256');
const  key = ecurve.genKeyPair();
const  pubPoint = key.getPublic('hex');

const rawKey = utils.rawKeyInHexfromUncompressed(pubPoint);
const compressedKey = utils.compressedKeyInHexfromRaw(rawKey);

const publicKey2 = u8a.fromString(compressedKey,'base16');
console.log(name.encodeDIDfromHexString(multicodecName,compressedKey));
console.log(name.encodeDIDfromBytes(multicodecName,publicKey2));
```

### output
```
did:key:zDnaeqYWNxcFqy5DcJm91BMTeWv5hjs1VL5medk9n8dDUC67T
did:key:zDnaeqYWNxcFqy5DcJm91BMTeWv5hjs1VL5medk9n8dDUC67T
```

### Compressed 49 Byte Key code example for P-384 key (using elliptic npm module):
```
import * as name from '../did-key-creator/lib/encodeDIDkey.js'
import * as utils from '../did-key-creator/lib/utils.js'
import u8a from 'uint8arrays'
import ec from 'elliptic'
var EC = ec.ec;

const multicodecName = 'p384-pub';
const  ecurve = new EC('p384');
const  key = ecurve.genKeyPair();
const  pubPoint = key.getPublic('hex');

const rawKey = utils.rawKeyInHexfromUncompressed(pubPoint);
const compressedKey = utils.compressedKeyInHexfromRaw(rawKey);

console.log(name.encodeDIDfromHexString(multicodecName,compressedKey));
```

### output
```
did:key:z82Lkz6GT5oNPzQowVWaYysnFPT1NAMsXayELmNjme3FhRErkTkij9ywuYWukxcLfNdW6Cw
```

### Compressed 67 Byte Key code example for P-521 key (using elliptic npm module):
```
import * as name from '../did-key-creator/lib/encodeDIDkey.js'
import * as utils from '../did-key-creator/lib/utils.js'
import u8a from 'uint8arrays'
import ec from 'elliptic'
var EC = ec.ec;

const multicodecName = 'p521-pub';
const  ecurve = new EC('p521');
const  key = ecurve.genKeyPair();
const  pubPoint = key.getPublic('hex');

const rawKey = utils.rawKeyInHexfromUncompressed(pubPoint);
const compressedKey = utils.compressedKeyInHexfromRaw(rawKey);

console.log(name.encodeDIDfromHexString(multicodecName,compressedKey));
```

### output
```
did:key:z2J9gaYmUxgiF1VDutBWwC4KVdpKfjnRkyV3t4kysx49eHz1wkYh1KHBPqbNdVH5GTgY2KLXtJPYTwFDkhQxuTWxK3K5HSKu
```

## Other Possible Uses:

### Raw 64 Byte Public Key code Example for P-256 Key:

```
import * as name from '../did-key-creator/lib/encodeDIDkey.js'
import u8a from 'uint8arrays'

const multicodecName = 'p256-pub';
const publicKeyHex = 'f9c36f8964623378bdc068d4bce07ed17c8fa486f9ac0c2613ca3c8c306d7bb61cd36717b8ac5e4fea8ad23dc8d0783c2318ee4ad7a80db6e0026ad0b072a24f';
const publicKey = u8a.fromString(publicKeyHex,'base16');

console.log(name.encodeDIDfromHexString(multicodecName,publicKeyHex));
console.log(name.encodeDIDfromBytes(multicodecName,publicKey));

```

### output
```
did:key:zruuPojWkzGPb8sVc42f2YxcTXKUTpAUbdrzVovaTBmGGNyK6cGFaA4Kp7SSLKecrxYz8Sc9d77Rss7rayYt1oFCaNJ
did:key:zruuPojWkzGPb8sVc42f2YxcTXKUTpAUbdrzVovaTBmGGNyK6cGFaA4Kp7SSLKecrxYz8Sc9d77Rss7rayYt1oFCaNJ
```

### Raw 64 Byte Public Key code Example  for P-256 key (using elliptic npm module):
```
import * as name from '../did-key-creator/lib/encodeDIDkey.js'
import * as utils from '../did-key-creator/lib/utils.js'
import u8a from 'uint8arrays'
import ec from 'elliptic'
var EC = ec.ec;

const  ecurve = new EC('p256');
const  key = ecurve.genKeyPair();
const  pubPoint = key.getPublic('hex');

const rawKey = utils.rawKeyInHexfromUncompressed(pubPoint);

const publicKey2 = u8a.fromString(rawKey,'base16');
console.log(name.encodeDIDfromHexString(multicodecName,rawKey));
console.log(name.encodeDIDfromBytes(multicodecName,publicKey2));
```

### output
```
did:key:zruqvMb8L2VWcghzg2Bt9QYwHnDfwixx9gKKU6Sy4pizM24cB98kFKefB8S7jYNvzyUFT5aRF1q7zEuMwR2RdszUDDc
did:key:zruqvMb8L2VWcghzg2Bt9QYwHnDfwixx9gKKU6Sy4pizM24cB98kFKefB8S7jYNvzyUFT5aRF1q7zEuMwR2RdszUDDc
```

### Uncompressed 65 Byte Key code example for P-256 key (using elliptic npm module):
```
import * as name from '../did-key-creator/lib/encodeDIDkey.js'
import * as utils from '../did-key-creator/lib/utils.js'
import u8a from 'uint8arrays'
import ec from 'elliptic'
var EC = ec.ec;

const  ecurve = new EC('p256');
const  key = ecurve.genKeyPair();
const  pubPoint = key.getPublic('hex');

const publicKey3 = u8a.fromString(pubPoint,'base16');
console.log(name.encodeDIDfromHexString(multicodecName,pubPoint));
console.log(name.encodeDIDfromBytes(multicodecName,publicKey3));

```

### output
```
did:key:z4oJ8bWfFMefRfFuNtDtu69bQyvaCpYh62thpGA9TWNZs614qDUfCdZ2KuZMEAFKXGACSo3Ws9FLZwscDGtLwThKFev44
did:key:z4oJ8bWfFMefRfFuNtDtu69bQyvaCpYh62thpGA9TWNZs614qDUfCdZ2KuZMEAFKXGACSo3Ws9FLZwscDGtLwThKFev44
```

## License

Apache-2.0 OR MIT
