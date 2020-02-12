export * from './sha/sha.js'
export * from './ripemd/ripemd160.js'


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