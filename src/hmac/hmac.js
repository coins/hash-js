import { SHA256, SHA512 } from '../hash.js'
import * as Buffer from '../../../buffer-js/src/buffer-utils/buffer-utils.js'


/**
 *    Computes a hash-based message authentication code.
 *
 *    @param {Bytes} key - Array of bytes
 *    @param {Bytes} message - Array of bytes to be hashed
 *    @param {Function} hash - The hash function to use (e.g. SHA-1)
 *    @param {Number} blockSize - The block size of the underlying hash function (e.g. 64 bytes for SHA-1)
 *    @param {Number} outputSize - The output size of the underlying hash function (e.g. 20 bytes for SHA-1)
 *    @return {Bytes} - the HMAC
 */
export async function hmac(key, message, hashFn, blockSize, outputSize) {

    // Keys longer than blockSize are shortened by hashing them
    if (key.byteLength > blockSize) {
        key = await hashFn.hash(key) // Key becomes outputSize bytes long
    }

    // Keys shorter than blockSize are padded to blockSize by padding with zeros on the right
    if (key.byteLength < blockSize) {
        key = Buffer.padRight(key, blockSize) // Pad key with zeros to make it blockSize bytes long
    }

    const innerPaddedKey = Buffer.xor(key, Buffer.repeat(0x36, blockSize))
    const outerPaddedKey = Buffer.xor(key, Buffer.repeat(0x5c, blockSize))

    const innerHash = await hashFn.hash(Buffer.concat(innerPaddedKey, message))
    const outerHash = await hashFn.hash(Buffer.concat(outerPaddedKey, innerHash))
    return outerHash
}

/**
 *    Computes a hash-based message authentication code using sha256.
 *
 *    @param {Bytes} key - Array of bytes
 *    @param {Bytes} message - Array of bytes to be hashed
 *    @return {Bytes} - the HMAC_sha256
 */
export function hmac_sha256(key, message) {
    return hmac(key, message, SHA256, 64, 32)
}

/**
 *    Computes a hash-based message authentication code using sha512.
 *
 *    @param {Bytes} key - Array of bytes
 *    @param {Bytes} message - Array of bytes to be hashed
 *    @return {Bytes} - the HMAC_sha512
 */
export function hmac_sha512(key, message) {
    return hmac(key, message, SHA512, 128, 64)
}


/*
using the native browser API:

async function hmac(secret, message){
	const algorithm = { name: 'HMAC', hash: 'SHA-256' };
	const key = await crypto.subtle.importKey('raw', secret, algorithm, false, ['sign'])
	const result = await crypto.subtle.sign(algorithm.name, key, message)
	return new Uint8Array(result)
}

*/
