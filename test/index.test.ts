import * as u8a from 'uint8arrays'

import { encodeDIDfromHexString, encodeDIDfromBytes } from '../src/encodeDIDkey.js'
import { compressedKeyInHexfromRaw, ECPointCompress, uncompressedKeyInHexfromRaw, rawKeyInHexfromUncompressed, pubKeyHexToUint8Array, didKeyIDtoPubKeyHex, didKeyURLtoPubKeyHex } from '../src/did_key_utils.js'

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

  // this is the standard use case
  test('encodeDIDfromHexStringtoCompressed', () => {
    const multicodecName = 'p256-pub';
    const key = 'f9c36f8964623378bdc068d4bce07ed17c8fa486f9ac0c2613ca3c8c306d7bb61cd36717b8ac5e4fea8ad23dc8d0783c2318ee4ad7a80db6e0026ad0b072a24f';
    const compressedKey = compressedKeyInHexfromRaw(key);
    expect(encodeDIDfromHexString(multicodecName,compressedKey)).toMatchSnapshot()
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


describe('did-key-creator-p384', () => {
  test('encodeDIDfromBytes', () => {
    const multicodecName = 'p384-pub';
    const key = u8a.fromString(
      '9489d3c65f1f8cb2a9fd40abc48d160e495a862fbbfbfe896ed8878e246f32f85e76129574705f8b61c263cb7f409c9ccba375202fb6997c47ade113056ecade605cc34a86af70961c2b3eca5d3dc824112dcc9f1afed786a0278073aee7566f',
      'base16'
    )
    expect(encodeDIDfromBytes(multicodecName,key)).toMatchSnapshot()
  })

  test('encodeDIDfromHexString', () => {
    const multicodecName = 'p384-pub';
    const key = '9489d3c65f1f8cb2a9fd40abc48d160e495a862fbbfbfe896ed8878e246f32f85e76129574705f8b61c263cb7f409c9ccba375202fb6997c47ade113056ecade605cc34a86af70961c2b3eca5d3dc824112dcc9f1afed786a0278073aee7566f';
    expect(encodeDIDfromHexString(multicodecName,key)).toMatchSnapshot()
  })

  test('compressedKeyInHexfromRaw', () => {
    const key = '9489d3c65f1f8cb2a9fd40abc48d160e495a862fbbfbfe896ed8878e246f32f85e76129574705f8b61c263cb7f409c9ccba375202fb6997c47ade113056ecade605cc34a86af70961c2b3eca5d3dc824112dcc9f1afed786a0278073aee7566f';
    expect(compressedKeyInHexfromRaw(key)).toMatchSnapshot()
  })

  // this is the standard use case
  test('encodeDIDfromHexStringtoCompressed', () => {
    const multicodecName = 'p384-pub';
    const key = '9489d3c65f1f8cb2a9fd40abc48d160e495a862fbbfbfe896ed8878e246f32f85e76129574705f8b61c263cb7f409c9ccba375202fb6997c47ade113056ecade605cc34a86af70961c2b3eca5d3dc824112dcc9f1afed786a0278073aee7566f';
    const compressedKey = compressedKeyInHexfromRaw(key);
    expect(encodeDIDfromHexString(multicodecName,compressedKey)).toMatchSnapshot()
  })

  test('ECPointCompress', () => {
    const publicKeyHex = '9489d3c65f1f8cb2a9fd40abc48d160e495a862fbbfbfe896ed8878e246f32f85e76129574705f8b61c263cb7f409c9ccba375202fb6997c47ade113056ecade605cc34a86af70961c2b3eca5d3dc824112dcc9f1afed786a0278073aee7566f';
    const xHex = publicKeyHex.slice(0,publicKeyHex.length/2);
    const yHex = publicKeyHex.slice(publicKeyHex.length/2,publicKeyHex.length);

    const xOctet = u8a.fromString(xHex,'base16')
    const yOctet = u8a.fromString(yHex,'base16')
    expect(ECPointCompress( xOctet , yOctet )).toMatchSnapshot()
  })

  test('uncompressedKeyInHexfromRaw', () => {
    const key = '9489d3c65f1f8cb2a9fd40abc48d160e495a862fbbfbfe896ed8878e246f32f85e76129574705f8b61c263cb7f409c9ccba375202fb6997c47ade113056ecade605cc34a86af70961c2b3eca5d3dc824112dcc9f1afed786a0278073aee7566f';
    expect(uncompressedKeyInHexfromRaw(key)).toMatchSnapshot()
  })

  test('rawKeyInHexfromUncompressed', () => {
    const key = '049489d3c65f1f8cb2a9fd40abc48d160e495a862fbbfbfe896ed8878e246f32f85e76129574705f8b61c263cb7f409c9ccba375202fb6997c47ade113056ecade605cc34a86af70961c2b3eca5d3dc824112dcc9f1afed786a0278073aee7566f';
    expect(rawKeyInHexfromUncompressed(key)).toMatchSnapshot()
  })

  test('pubKeyHexToUint8Array', () => {
    const key = '9489d3c65f1f8cb2a9fd40abc48d160e495a862fbbfbfe896ed8878e246f32f85e76129574705f8b61c263cb7f409c9ccba375202fb6997c47ade113056ecade605cc34a86af70961c2b3eca5d3dc824112dcc9f1afed786a0278073aee7566f';
    expect(pubKeyHexToUint8Array(key)).toMatchSnapshot()
  })

  test('didKeyIDtoPubKeyHex', () => {
    const keyID = 'z82Lm1MpAkeJcix9K8TMiLd5NMAhnwkjjCBeWHXyu3U4oT2MVJJKXkcVBgjGhnLBn2Kaau9';
    expect(didKeyIDtoPubKeyHex(keyID)).toMatchSnapshot()
  })

  test('didKeyURLtoPubKeyHex', () => {
    const keyID = 'did:key:z82Lm1MpAkeJcix9K8TMiLd5NMAhnwkjjCBeWHXyu3U4oT2MVJJKXkcVBgjGhnLBn2Kaau9';
    expect(didKeyURLtoPubKeyHex(keyID)).toMatchSnapshot()
  })

})


describe('did-key-creator-p521', () => {
  test('encodeDIDfromBytes', () => {
    const multicodecName = 'p521-pub';
    const key = u8a.fromString(
      '0125073ccca272143441b1d9f687cdc7f978cbb96e9dc9f97de28ba373a92769d26d9a02ee67dfa258f9bb2eece8a48a5c59a7356c46278d883ab8d9e3baaac2ac92016f738880b865041548d98b969e7dc982ab8d1634fd5a8ef86388610f6d6293eb68129496810877a708fefca70b3959599b56a6038cdc73e160481ac10ef4dd18c2',
      'base16'
    )
    expect(encodeDIDfromBytes(multicodecName,key)).toMatchSnapshot()
  })

  test('encodeDIDfromHexString', () => {
    const multicodecName = 'p521-pub';
    const key = '0125073ccca272143441b1d9f687cdc7f978cbb96e9dc9f97de28ba373a92769d26d9a02ee67dfa258f9bb2eece8a48a5c59a7356c46278d883ab8d9e3baaac2ac92016f738880b865041548d98b969e7dc982ab8d1634fd5a8ef86388610f6d6293eb68129496810877a708fefca70b3959599b56a6038cdc73e160481ac10ef4dd18c2';
    expect(encodeDIDfromHexString(multicodecName,key)).toMatchSnapshot()
  })

  // this is the standard use case
  test('encodeDIDfromHexStringtoCompressed', () => {
    const multicodecName = 'p521-pub';
    const key = '0125073ccca272143441b1d9f687cdc7f978cbb96e9dc9f97de28ba373a92769d26d9a02ee67dfa258f9bb2eece8a48a5c59a7356c46278d883ab8d9e3baaac2ac92016f738880b865041548d98b969e7dc982ab8d1634fd5a8ef86388610f6d6293eb68129496810877a708fefca70b3959599b56a6038cdc73e160481ac10ef4dd18c2';
    const compressedKey = compressedKeyInHexfromRaw(key);
    expect(encodeDIDfromHexString(multicodecName,compressedKey)).toMatchSnapshot()
  })

  test('compressedKeyInHexfromRaw', () => {
    const key = '0125073ccca272143441b1d9f687cdc7f978cbb96e9dc9f97de28ba373a92769d26d9a02ee67dfa258f9bb2eece8a48a5c59a7356c46278d883ab8d9e3baaac2ac92016f738880b865041548d98b969e7dc982ab8d1634fd5a8ef86388610f6d6293eb68129496810877a708fefca70b3959599b56a6038cdc73e160481ac10ef4dd18c2';
    expect(compressedKeyInHexfromRaw(key)).toMatchSnapshot()
  })

  test('ECPointCompress', () => {
    const publicKeyHex = '0125073ccca272143441b1d9f687cdc7f978cbb96e9dc9f97de28ba373a92769d26d9a02ee67dfa258f9bb2eece8a48a5c59a7356c46278d883ab8d9e3baaac2ac92016f738880b865041548d98b969e7dc982ab8d1634fd5a8ef86388610f6d6293eb68129496810877a708fefca70b3959599b56a6038cdc73e160481ac10ef4dd18c2';
    const xHex = publicKeyHex.slice(0,publicKeyHex.length/2);
    const yHex = publicKeyHex.slice(publicKeyHex.length/2,publicKeyHex.length);

    const xOctet = u8a.fromString(xHex,'base16')
    const yOctet = u8a.fromString(yHex,'base16')
    expect(ECPointCompress( xOctet , yOctet )).toMatchSnapshot()
  })

  test('uncompressedKeyInHexfromRaw', () => {
    const key = '0125073ccca272143441b1d9f687cdc7f978cbb96e9dc9f97de28ba373a92769d26d9a02ee67dfa258f9bb2eece8a48a5c59a7356c46278d883ab8d9e3baaac2ac92016f738880b865041548d98b969e7dc982ab8d1634fd5a8ef86388610f6d6293eb68129496810877a708fefca70b3959599b56a6038cdc73e160481ac10ef4dd18c2';
    expect(uncompressedKeyInHexfromRaw(key)).toMatchSnapshot()
  })

  test('rawKeyInHexfromUncompressed', () => {
    const key = '040125073ccca272143441b1d9f687cdc7f978cbb96e9dc9f97de28ba373a92769d26d9a02ee67dfa258f9bb2eece8a48a5c59a7356c46278d883ab8d9e3baaac2ac92016f738880b865041548d98b969e7dc982ab8d1634fd5a8ef86388610f6d6293eb68129496810877a708fefca70b3959599b56a6038cdc73e160481ac10ef4dd18c2';
    expect(rawKeyInHexfromUncompressed(key)).toMatchSnapshot()
  })

  test('pubKeyHexToUint8Array', () => {
    const key = '0125073ccca272143441b1d9f687cdc7f978cbb96e9dc9f97de28ba373a92769d26d9a02ee67dfa258f9bb2eece8a48a5c59a7356c46278d883ab8d9e3baaac2ac92016f738880b865041548d98b969e7dc982ab8d1634fd5a8ef86388610f6d6293eb68129496810877a708fefca70b3959599b56a6038cdc73e160481ac10ef4dd18c2';
    expect(pubKeyHexToUint8Array(key)).toMatchSnapshot()
  })

  test('didKeyIDtoPubKeyHex', () => {
    const keyID = 'z2J9gaYxrKVpdoG9A4gRnmpnRCcxU6agDtFVVBVdn1JedouoZN7SzcyREXXzWgt3gGiwpoHq7K68X4m32D8HgzG8wv3sY5j7';
    expect(didKeyIDtoPubKeyHex(keyID)).toMatchSnapshot()
  })

  test('didKeyURLtoPubKeyHex', () => {
    const keyID = 'did:key:z2J9gaYxrKVpdoG9A4gRnmpnRCcxU6agDtFVVBVdn1JedouoZN7SzcyREXXzWgt3gGiwpoHq7K68X4m32D8HgzG8wv3sY5j7';
    expect(didKeyURLtoPubKeyHex(keyID)).toMatchSnapshot()
  })

})
