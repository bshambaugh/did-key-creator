import * as u8a from 'uint8arrays'
import multicodec from 'multicodec'
import  multibase from'multibase'

// compress a public key with points x,y expressed as UintArrays
// source: https://stackoverflow.com/questions/17171542/algorithm-for-elliptic-curve-point-compression
export function ECPointCompress( x: Uint8Array, y: Uint8Array )
{
    const out = new Uint8Array( x.length + 1 );

    out[0] = 2 + ( y[ y.length-1 ] & 1 );
    out.set( x, 1 );

    return out;
}

// create a compressed public key in hex from a raw public key in hex
export function compressedKeyInHexfromRaw(publicKeyHex: string) {
  const xHex = publicKeyHex.slice(0,publicKeyHex.length/2);
  const yHex = publicKeyHex.slice(publicKeyHex.length/2,publicKeyHex.length);

  const xOctet = u8a.fromString(xHex,'base16')
  const yOctet = u8a.fromString(yHex,'base16');

  const compressedPoint = ECPointCompress( xOctet , yOctet );
  const compressedPointHex = u8a.toString(compressedPoint,'base16');
  return compressedPointHex;
}

// create an uncompressed public key from a raw public key in hex
export function uncompressedKeyInHexfromRaw(publicKeyHex: string) {
   return '04'+publicKeyHex;
}

// create a raw public key from a uncompressed public key in hex
export function rawKeyInHexfromUncompressed(publicKeyHex: string) {
   return publicKeyHex.slice(2);
}

export function pubKeyHexToUint8Array(publicKeyHex: string) {
  if(publicKeyHex == null) {
   throw new TypeError('input cannot be null or undefined.');
  }
    if(publicKeyHex.length % 2 == 0) {
          return u8a.fromString(publicKeyHex,'base16');
      } else {
          return u8a.fromString(('0'+publicKeyHex),'base16');
    }
}

export function didKeyIDtoPubKeyHex(didKeyID : string) {
   const buf = multibase.decode(didKeyID);
   const bufwoPrefix = multicodec.rmPrefix(buf);
   return u8a.toString(bufwoPrefix,'base16')
}

export function didKeyURLtoPubKeyHex(didKeyURL : string) {
    const didKeyID = didKeyURL.split(':')[2];
    return didKeyIDtoPubKeyHex(didKeyID);
}
