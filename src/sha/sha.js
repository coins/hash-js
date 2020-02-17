import { toHex } from '../../../buffer-js/buffer.js'

/**
 *
 * Secure Hash Functions
 * Simple wrappers for the WebCrypto API
 *
 */

import { instanciateClass } from '../hash-utils.js'

/*

    WebCrypto is only available in secure origins.
    @see https://stackoverflow.com/questions/46670556/how-to-enable-crypto-subtle-for-unsecure-origins-in-chrome
    
 */

let digest;

if (window.crypto.subtle) {
    digest = window.crypto.digest
} else {
    console.error('Error: Code must run under secure origin!')
    digest = async (options, message) => {
        const { sha256 } = await import('./sha256-polyfill.js')
        return sha256(new Uint8Array(message))
    }
    // TODO: Polyfill other functions.
}



/**
 *
 * Computes the SHA256 hash of an input
 * @param {ArrayBuffer} buffer - The input
 * @return {Promise<ArrayBuffer>} The hash of the input
 *
 */
export function sha256(buffer) {
    return digest({ name: 'SHA-256' }, buffer)
}

/**
 *
 * Computes the double SHA256 hash of an input
 * @param {ArrayBuffer} buffer - The input
 * @return {Promise<ArrayBuffer>} The hash of the input
 *
 */
export function sha256d(buffer) {
    return sha256(buffer).then(sha256);
}

/**
 *
 * Computes the SHA512 hash of an input
 * @param {ArrayBuffer} buffer - The input
 * @return {Promise<ArrayBuffer>} The hash of the input
 *
 */
export function sha512(buffer) {
    return digest({ name: 'SHA-512' }, buffer)
}

/**
 *
 * Computes the SHA1 hash of an input
 * @param {ArrayBuffer} buffer - The input
 * @return {Promise<ArrayBuffer>} The hash of the input
 *
 */
export function sha1(buffer) {
    return digest({ name: 'SHA-1' }, buffer)
}


const SHA1_HASH_LENGTH = 20
const SHA256_HASH_LENGTH = 32
const SHA512_HASH_LENGTH = 64

/**
 * Class for SHA256 hashes
 * @type Hash
 */
export const SHA256 = instanciateClass(sha256, SHA256_HASH_LENGTH)

/**
 * Class for double SHA256 hashes
 * @type Hash
 */
export const SHA256d = instanciateClass(sha256d, SHA256_HASH_LENGTH)

/**
 * Class for SHA512 hashes
 * @type Hash
 */
export const SHA512 = instanciateClass(sha512, SHA512_HASH_LENGTH)

/**
 * Class for SHA1 hashes
 * @type Hash
 */
export const SHA1 = instanciateClass(sha1, SHA1_HASH_LENGTH)


/** 
 * A serializable double-SHA256 hash with high-level buffer methods. 
 */
export class SerialSHA256d extends SHA256d {

    /** 
     * @override
     */
    toHex() {
        const copy = this.slice(0).reverse() // reverse to fix Satoshi's byte order
        return toHex(copy)
    }

    /** 
     * @override
     */
    write(writer) {
        writer.writeBytes(this.slice(0))
    }

    static read(reader) {
        const hash = reader.readBytes(this.byteLength())
        return new SerialSHA256d(hash)
    }

    // TODO: WTF is this code smell?
    byteLength() {
        return this.constructor.byteLength()
    }

    static byteLength() { return 32 }
}