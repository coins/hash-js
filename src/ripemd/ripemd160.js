// TODO: Port this implementation (because it looks much cleaner) https://github.com/openssl/openssl/tree/master/crypto/ripemd

import { RIPEMD } from './ripemd160-impl-1.js'

/**
 *
 * Computes the RIPEMD160 hash of an input
 * @param {ArrayBuffer} buffer The input
 * @return {Promise<Uint8Array>} The hash of the input
 *
 */
export function ripemd160(buffer) {
    const hash = RIPEMD.hash(new Uint8Array(buffer).buffer)
    return Promise.resolve(hash); // We wrap the result into a promise to stay consistent with the interfaces of all our SHA hash functions 
}

import { instanciateClass } from '../hash-utils.js'
const RIPEMD_HASH_LENGTH = 20

/**
 * Class for RIPEMD160 hashes
 * @type Hash
 */
export const RIPEMD160 = instanciateClass(ripemd160, RIPEMD_HASH_LENGTH)