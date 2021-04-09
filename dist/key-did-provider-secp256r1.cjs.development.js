'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var u8a = require('uint8arrays');
var multicodec = _interopDefault(require('multicodec'));
var multibase = _interopDefault(require('multibase'));

function encodeDIDfromHexString(publicKeyHex) {
  var publicKey = u8a.fromString(publicKeyHex, 'base16');
  var didKey = encodeDID(publicKey);
  return didKey;
}
function encodeDID(publicKey) {
  var publicKeywPrefix = multicodec.addPrefix('p256-pub', publicKey);
  var buf = multibase.encode('base58btc', publicKeywPrefix);
  var bufAsString = u8a.toString(buf);
  return "did:key:" + bufAsString;
}

exports.encodeDID = encodeDID;
exports.encodeDIDfromHexString = encodeDIDfromHexString;
//# sourceMappingURL=key-did-provider-secp256r1.cjs.development.js.map
