import u8a from 'uint8arrays'

import { encodeDID } from '../src'

describe('key-did-provider-secp256r1', () => {
  test('encodeDID', () => {
    const key = u8a.fromString(
      'f9c36f8964623378bdc068d4bce07ed17c8fa486f9ac0c2613ca3c8c306d7bb61cd36717b8ac5e4fea8ad23dc8d0783c2318ee4ad7a80db6e0026ad0b072a24f',
      'base16'
    )
    expect(encodeDID(key)).toMatchSnapshot()
  })
})
