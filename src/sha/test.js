import { SHA256 } from './sha.js'

// Test vectors: https://www.di-mgt.com.au/sha_testvectors.html
// Test vectors: https://github.com/bitcoin/bitcoin/blob/master/src/test/crypto_tests.cpp


describe('The SHA hash functions', function() {

    //demonstrates use of SHA256
    describe('SHA256', function() {

        it('can hash a pre-image', async function() {
            const hash = await SHA256.hashUnicode('abc')
            expect(hash.toHex()).toBe('ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad')
        })

        it('can hash an empty pre-image', async function() {
            const hash = await SHA256.hashUnicode('')
            expect(hash.toHex()).toBe('e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855')
        })

        it('can hash a long pre-image', async function() {
            const hash = await SHA256.hashUnicode('abcdefghbcdefghicdefghijdefghijkefghijklfghijklmghijklmnhijklmnoijklmnopjklmnopqklmnopqrlmnopqrsmnopqrstnopqrstu')
            expect(hash.toHex()).toBe('cf5b16a778af8380036ce59e7b0492370b249b11e8f07a51afac45037afee9d1')
        })

    })
})



