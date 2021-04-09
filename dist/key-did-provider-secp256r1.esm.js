import { fromString, toString } from 'uint8arrays';
import multicodec from 'multicodec';
import multibase from 'multibase';

function encodeDIDfromHexString(publicKeyHex) {
  var publicKey = fromString(publicKeyHex, 'base16');
  var didKey = encodeDID(publicKey);
  return didKey;
}
function encodeDID(publicKey) {
  var publicKeywPrefix = multicodec.addPrefix('p256-pub', publicKey);
  var buf = multibase.encode('base58btc', publicKeywPrefix);
  var bufAsString = toString(buf);
  return "did:key:" + bufAsString;
}

export { encodeDID, encodeDIDfromHexString };
//# sourceMappingURL=key-did-provider-secp256r1.esm.js.map
