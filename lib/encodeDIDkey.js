import * as u8a from 'uint8arrays';
import multicodec from 'multicodec';
import { base58btc } from 'multiformats/bases/base58';
export function encodeDIDfromHexString(multicodecName, publicKeyHex) {
    const publicKey = u8a.fromString(publicKeyHex, 'base16');
    const didKey = encodeDIDfromBytes(multicodecName, publicKey);
    return didKey;
}
export function encodeDIDfromBytes(multicodecName, publicKey) {
    const publicKeywPrefix = multicodec.addPrefix(multicodecName, publicKey);
    const bufAsString = base58btc.encode(publicKeywPrefix);
    return `did:key:${bufAsString}`;
}
//# sourceMappingURL=encodeDIDkey.js.map