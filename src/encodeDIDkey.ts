import * as u8a from 'uint8arrays'
import multicodec from 'multicodec'
import { base58btc } from 'multiformats/bases/base58'
import { CodecName } from 'multicodec/src/generated-types';


export function encodeDIDfromHexString(multicodecName: CodecName,publicKeyHex: string): string {
    const publicKey = u8a.fromString(publicKeyHex,'base16');
    const didKey = encodeDIDfromBytes(multicodecName,publicKey);
    return didKey;
}


export function encodeDIDfromBytes(multicodecName: CodecName, publicKey: Uint8Array): string {
      const publicKeywPrefix = multicodec.addPrefix(multicodecName,publicKey)
      const bufAsString = base58btc.encode(publicKeywPrefix);
	  return `did:key:${bufAsString}`	  
}
