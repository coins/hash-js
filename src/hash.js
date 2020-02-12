export * from './sha/sha.js'
export * from './ripemd/ripemd160.js'

import { instanciateClass } from './hash-utils.js'
import { sha256 } from './sha/sha.js'
import { ripemd160 } from './ripemd/ripemd160.js'
/**
 *
 * Computes the RIPEMD160 hash of the SHA256 hash an input
 * @param {ArrayBuffer} buffer The input
 * @return {Promise<Uint8Array>} The hash of the input
 *
 */
export function hash160(buffer) {
    return sha256(buffer).then(hash => ripemd160(hash));
}

/**
 * Class for RIPEMD(SHA256(m)) hashes
 * @type Hash
 */
export const HASH160 = instanciateClass(hash160, 20)