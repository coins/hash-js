import { RIPEMD160 } from './ripemd160.js'

// Test vectors: https://github.com/bitcoin/bitcoin/blob/master/src/test/crypto_tests.cpp


describe('The RIPEMD hash function', function() {

    //demonstrates use of RIPEMD160
    describe('RIPEMD160', function() {

        it('can hash a pre-image', async function() {
            const hash = await RIPEMD160.hashUnicode('abc')
            expect(hash.toHex()).toBe('8eb208f7e05d987a9b044a8e98c6b087f15a0bfc')
        })

        it('can hash an empty pre-image', async function() {
            const hash = await RIPEMD160.hashUnicode('')
            expect(hash.toHex()).toBe('9c1185a5c5e9fc54612808977ee8f548b2258d31')
        })

        it('can hash a longer pre-image', async function() {
            const hash = await RIPEMD160.hashUnicode('abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq')
            expect(hash.toHex()).toBe('12a053384a9c0c88e405a06c27dcf49ada62eb2b')
        })

    })
})



