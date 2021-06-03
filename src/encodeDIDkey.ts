import * as u8a from 'uint8arrays'
import multicodec from 'multicodec'
import  multibase from'multibase'

export function encodeDIDfromHexString(publicKeyHex: string, multicodecName: string) {
    const publicKey = u8a.fromString(publicKeyHex,'base16');
    const didKey = encodeDIDfromBytes(publicKey,multicodecName);
    return didKey;
}

export function encodeDIDfromBytes(publicKey: Uint8Array, multicodecName: string) {
          const publicKeywPrefix = multicodec.addPrefix(multicodecName,publicKey)
          const buf = multibase.encode('base58btc',publicKeywPrefix)
          const bufAsString = u8a.toString(buf)
	  return `did:key:${bufAsString}`	  
}
