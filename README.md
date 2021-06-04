# did:key creator
Still work in progress.

## Reference
This has been tested to create did:keys from the P-256 curve like in https://github.com/w3c-ccg/did-method-key
and https://w3c-ccg.github.io/did-method-key/ .

## Usage

### Code Example for P-256 Key:

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

## License

Apache-2.0 OR MIT
