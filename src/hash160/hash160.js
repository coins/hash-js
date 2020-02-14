import { instanciateClass } from '../hash-utils.js'
import { sha256 } from '../sha/sha.js'
import { ripemd160 } from '../ripemd/ripemd160.js'

/**
 *
 * Computes the RIPEMD160(SHA256(input)) hash of an input
 * @param {ArrayBuffer} buffer The input
 * @return {Promise<Uint8Array>} The hash of the input
 *
 */
export function hash160(buffer) {
    return sha256(buffer).then(hash => ripemd160(hash));
}

/**
 * 
 * Class for HASH160 hashes
 * HASH160 = RIPEMD(SHA256(m))
 * @type Hash
 * 
 */
export const HASH160 = instanciateClass(hash160, 20)