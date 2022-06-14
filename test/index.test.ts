import * as u8a from 'uint8arrays'

import { encodeDIDfromHexString, encodeDIDfromBytes } from '../src/encodeDIDkey'


///name.encodeDIDfromHexString(multicodecName,publicKeyHex

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
})
