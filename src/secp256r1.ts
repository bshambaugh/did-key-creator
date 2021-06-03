import * as u8a from 'uint8arrays'
import multicodec from 'multicodec'
import  multibase from'multibase'

export function encodeDIDfromHexString(publicKeyHex: string) {
    const publicKey = u8a.fromString(publicKeyHex,'base16');
    const didKey = encodeDIDfromBytes(publicKey)
    return didKey;
}

export function encodeDIDfromBytes(publicKey: Uint8Array) {
          const publicKeywPrefix = multicodec.addPrefix('p256-pub',publicKey)
          const buf = multibase.encode('base58btc',publicKeywPrefix)
          const bufAsString = u8a.toString(buf)
	  return `did:key:${bufAsString}`	  
}
