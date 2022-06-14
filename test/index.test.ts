import * as u8a from 'uint8arrays'

import { encodeDIDfromHexString, encodeDIDfromBytes } from '../src/encodeDIDkey'
import { compressedKeyInHexfromRaw, ECPointCompress, uncompressedKeyInHexfromRaw, rawKeyInHexfromUncompressed, pubKeyHexToUint8Array, didKeyIDtoPubKeyHex, didKeyURLtoPubKeyHex } from '../src/did_utils'

describe('did-key-creator-p256', () => {
  test('encodeDIDfromBytes', () => {
    const multicodecName = 'p256-pub';
    const key = u8a.fromString(
      'f9c36f8964623378bdc068d4bce07ed17c8fa486f9ac0c2613ca3c8c306d7bb61cd36717b8ac5e4fea8ad23dc8d0783c2318ee4ad7a80db6e0026ad0b072a24f',
      'base16'
    )
    expect(encodeDIDfromBytes(multicodecName,key)).toMatchSnapshot()
  })

  test('encodeDIDfromHexString', () => {
    const multicodecName = 'p256-pub';
    const key = 'f9c36f8964623378bdc068d4bce07ed17c8fa486f9ac0c2613ca3c8c306d7bb61cd36717b8ac5e4fea8ad23dc8d0783c2318ee4ad7a80db6e0026ad0b072a24f';
    expect(encodeDIDfromHexString(multicodecName,key)).toMatchSnapshot()
  })

  test('compressedKeyInHexfromRaw', () => {
    const key = 'f9c36f8964623378bdc068d4bce07ed17c8fa486f9ac0c2613ca3c8c306d7bb61cd36717b8ac5e4fea8ad23dc8d0783c2318ee4ad7a80db6e0026ad0b072a24f';
    expect(compressedKeyInHexfromRaw(key)).toMatchSnapshot()
  })

  test('ECPointCompress', () => {
    const publicKeyHex = 'f9c36f8964623378bdc068d4bce07ed17c8fa486f9ac0c2613ca3c8c306d7bb61cd36717b8ac5e4fea8ad23dc8d0783c2318ee4ad7a80db6e0026ad0b072a24f';
    const xHex = publicKeyHex.slice(0,publicKeyHex.length/2);
    const yHex = publicKeyHex.slice(publicKeyHex.length/2,publicKeyHex.length);
  
    const xOctet = u8a.fromString(xHex,'base16')
    const yOctet = u8a.fromString(yHex,'base16')
    expect(ECPointCompress( xOctet , yOctet )).toMatchSnapshot()
  })

  test('uncompressedKeyInHexfromRaw', () => {
    const key = 'f9c36f8964623378bdc068d4bce07ed17c8fa486f9ac0c2613ca3c8c306d7bb61cd36717b8ac5e4fea8ad23dc8d0783c2318ee4ad7a80db6e0026ad0b072a24f';
    expect(uncompressedKeyInHexfromRaw(key)).toMatchSnapshot()
  })

  test('rawKeyInHexfromUncompressed', () => {
    const key = '04f9c36f8964623378bdc068d4bce07ed17c8fa486f9ac0c2613ca3c8c306d7bb61cd36717b8ac5e4fea8ad23dc8d0783c2318ee4ad7a80db6e0026ad0b072a24f';
    expect(rawKeyInHexfromUncompressed(key)).toMatchSnapshot()
  })
  
  test('pubKeyHexToUint8Array', () => {
    const key = 'f9c36f8964623378bdc068d4bce07ed17c8fa486f9ac0c2613ca3c8c306d7bb61cd36717b8ac5e4fea8ad23dc8d0783c2318ee4ad7a80db6e0026ad0b072a24f';
    expect(pubKeyHexToUint8Array(key)).toMatchSnapshot()
  })

  test('didKeyIDtoPubKeyHex', () => {
    const keyID = 'zruuPojWkzGPb8sVc42f2YxcTXKUTpAUbdrzVovaTBmGGNyK6cGFaA4Kp7SSLKecrxYz8Sc9d77Rss7rayYt1oFCaNJ';
    expect(didKeyIDtoPubKeyHex(keyID)).toMatchSnapshot()
  })

  test('didKeyURLtoPubKeyHex', () => {
    const keyID = 'did:key:zruuPojWkzGPb8sVc42f2YxcTXKUTpAUbdrzVovaTBmGGNyK6cGFaA4Kp7SSLKecrxYz8Sc9d77Rss7rayYt1oFCaNJ';
    expect(didKeyURLtoPubKeyHex(keyID)).toMatchSnapshot()
  })

})
