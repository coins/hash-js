import { HASH160 } from './hash160.js'

describe('The RIPEMD hash functions', function() {

    describe('HASH160', function() {

        it('can hash a pre-image', async function() {
            const hash = await HASH160.hashUnicode('abc')
            expect(hash.toHex()).toBe('bb1be98c142444d7a56aa3981c3942a978e4dc33')
        })

        it('can hash an empty pre-image', async function() {
            const hash = await HASH160.hashUnicode('')
            expect(hash.toHex()).toBe('b472a266d0bd89c13706a4132ccfb16f7c3b9fcb')
        })

        it('can hash a longer pre-image', async function() {
            const hash = await HASH160.hashUnicode('abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq')
            expect(hash.toHex()).toBe('69dda8a60e0cfc2353aa776864092c0e5ccb4834')
        })

    })
})



