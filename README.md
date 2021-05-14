# secp256r1 key did provider
Still work in progress.

## Usage

```js
import * as key-did-secp256r1 from './key-did-provider-secp256r1/dist/index.js'
import u8a from 'uint8arrays'

const publicKeyHex = 'f9c36f8964623378bdc068d4bce07ed17c8fa486f9ac0c2613ca3c8c306d7bb61cd36717b8ac5e4fea8ad23dc8d0783c2318ee4ad7a80db6e0026ad0b072a24f';
const publicKey = u8a.fromString(publicKeyHex,'base16');

console.log(key-did-secp256r1.encodeDID(publicKey));

console.log(key-did-secp256r1.encodeDIDfromHexString(publicKeyHex));

output:

did:key:zruuPojWkzGPb8sVc42f2YxcTXKUTpAUbdrzVovaTBmGGNyK6cGFaA4Kp7SSLKecrxYz8Sc9d77Rss7rayYt1oFCaNJ
did:key:zruuPojWkzGPb8sVc42f2YxcTXKUTpAUbdrzVovaTBmGGNyK6cGFaA4Kp7SSLKecrxYz8Sc9d77Rss7rayYt1oFCaNJ
```

## License

Apache-2.0 OR MIT
