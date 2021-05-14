import * as u8a from 'uint8arrays'
import multicodec from 'multicodec'
import  multibase from'multibase'

export function encodeDIDfromHexString(publicKeyHex: string) {
    const publicKey = u8a.fromString(publicKeyHex,'base16');
    const didKey = encodeDID(publicKey)
    return didKey;
}

export function encodeDID(publicKey: Uint8Array) {
          const publicKeywPrefix = multicodec.addPrefix('p256-pub',publicKey)
          const buf = multibase.encode('base58btc',publicKeywPrefix)
          const bufAsString = u8a.toString(buf)
          return `did:key:${bufAsString}`	  
}

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
export function compresedKeyInHex(publicKeyHex: string) {
  const xHex = publicKeyHex.slice(0,publicKeyHex.length/2);
  const yHex = publicKeyHex.slice(publicKeyHex.length/2,publicKeyHex.length);

  const xOctet = u8a.fromString(xHex,'base16')
  const yOctet = u8a.fromString(yHex,'base16');

  const compressedPoint = ECPointCompress( xOctet , yOctet );
  const compressedPointHex = u8a.toString(compressedPoint,'base16');
  return compressedPointHex;
}
