/**
 *
 * Secure Hash Functions
 * Simple wrappers for the WebCrypto API
 *
 */

/**
 *
 * Computes the SHA256 hash of an input
 * @param {ArrayBuffer} buffer - The input
 * @return {Promise<ArrayBuffer>} The hash of the input
 *
 */
export function sha256(buffer) {
    return crypto.subtle.digest({ name: 'SHA-256' }, buffer)
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
    return crypto.subtle.digest({ name: 'SHA-512' }, buffer)
}

/**
 *
 * Computes the SHA1 hash of an input
 * @param {ArrayBuffer} buffer - The input
 * @return {Promise<ArrayBuffer>} The hash of the input
 *
 */
export function sha1(buffer) {
    return crypto.subtle.digest({ name: 'SHA-1' }, buffer)
}

import { instanciateClass } from './hash-utils.js'
const SHA_HASH_LENGTH = 32

/**
* Class for SHA256 hashes
* @type Hash
*/
export const SHA256 = instanciateClass(sha256, SHA_HASH_LENGTH);

export const SHA256d = instanciateClass(sha256d, SHA_HASH_LENGTH);

export const SHA512 = instanciateClass(sha512, SHA_HASH_LENGTH);

