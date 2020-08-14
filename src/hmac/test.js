import { hmac_sha256, hmac_sha512 } from './hmac.js'
import { Buffer }from '../../../buffer-js/buffer.js'

// Test vectors: https://github.com/bitcoin/bitcoin/blob/master/src/test/crypto_tests.cpp#L295
// Test vectors: https://tools.ietf.org/html/rfc4868#section-2.7.1
describe('The HMAC functions', function() {

    describe('HMAC_SHA256', function() {

        it('can hash a pre-image', async function() {
        	const key = Buffer.fromHex('0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b')
        	const message = Buffer.fromHex('4869205468657265')
            const hash = await hmac_sha256(key, message)
            expect(hash.toHex()).toBe('b0344c61d8db38535ca8afceaf0bf12b881dc200c9833da726e9376c2e32cff7')
        })


        it('can hash a large pre-image', async function() {
        	const key = Buffer.fromHex('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        	const message = Buffer.fromHex('5468697320697320612074657374207573696e672061206c6172676572207468616e20626c6f636b2d73697a65206b657920616e642061206c6172676572207468616e20626c6f636b2d73697a6520646174612e20546865206b6579206e6565647320746f20626520686173686564206265666f7265206265696e6720757365642062792074686520484d414320616c676f726974686d2e')
            const hash = await hmac_sha256(key, message)
            expect(hash.toHex()).toBe('9b09ffa71b942fcb27635fbcd5b0e944bfdc63644f0713938a7f51535c3a35e2')
        })

    })

    describe('HMAC_SHA512', function() {

        it('can hash a pre-image', async function() {
            const key = Buffer.fromHex('0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b')
            const message = Buffer.fromHex('4869205468657265')
            const hash = await hmac_sha512(key, message)
            expect(hash.toHex()).toBe('87aa7cdea5ef619d4ff0b4241a1d6cb02379f4e2ce4ec2787ad0b30545e17cdedaa833b7d6b8a702038b274eaea3f4e4be9d914eeb61f1702e696c203a126854')
        })


        it('can hash a large pre-image', async function() {
            const key = Buffer.fromHex('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
            const message = Buffer.fromHex('5468697320697320612074657374207573696e672061206c6172676572207468616e20626c6f636b2d73697a65206b657920616e642061206c6172676572207468616e20626c6f636b2d73697a6520646174612e20546865206b6579206e6565647320746f20626520686173686564206265666f7265206265696e6720757365642062792074686520484d414320616c676f726974686d2e')
            const hash = await hmac_sha512(key, message)
            expect(hash.toHex()).toBe('e37b6a775dc87dbaa4dfa9f96e5e3ffddebd71f8867289865df5a32d20cdc944b6022cac3c4982b10d5eeb55c3e4de15134676fb6de0446065c97440fa8c6a58')
        })

    })
})



 
 

