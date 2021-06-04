import * as u8a from 'uint8arrays'
import multicodec from 'multicodec'
import  multibase from'multibase'
import { CodecName } from 'multicodec/src/generated-types';


export function encodeDIDfromHexString(multicodecName: CodecName,publicKeyHex: string) {
    const publicKey = u8a.fromString(publicKeyHex,'base16');
    const didKey = encodeDIDfromBytes(multicodecName,publicKey);
    return didKey;
}


export function encodeDIDfromBytes(multicodecName: CodecName, publicKey: Uint8Array) {
          const publicKeywPrefix = multicodec.addPrefix(multicodecName,publicKey)
          const buf = multibase.encode('base58btc',publicKeywPrefix)
          const bufAsString = u8a.toString(buf)
	  return `did:key:${bufAsString}`	  
}
