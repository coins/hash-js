/**
 *
 * Secure Hash Functions
 * Simple wrappers for the WebCrypto API
 *
 */

/**
 *
 * Computes the SHA256 hash of an input
 * @param {ArrayBuffer} buffer The input
 * @return {Promise<Uint8Array>} The hash of the input
 *
 */
export function sha256(buffer) {
    return crypto.subtle.digest({ name: 'SHA-256' }, buffer)
        .then(new Uint8Array)
}

/**
 *
 * Computes the double SHA256 hash of an input
 * @param {ArrayBuffer} buffer The input
 * @return {Promise<Uint8Array>} The hash of the input
 *
 */
export function sha256d(buffer) {
    return sha256(buffer).then(sha256);
}

/**
 *
 * Computes the SHA512 hash of an input
 * @param {ArrayBuffer} buffer The input
 * @return {Promise<Uint8Array>} The hash of the input
 *
 */
export function sha512(buffer) {
    return crypto.subtle.digest({ name: 'SHA-512' }, buffer)
        .then(new Uint8Array)
}

/**
 *
 * Computes the SHA1 hash of an input
 * @param {ArrayBuffer} buffer The input
 * @return {Promise<Uint8Array>} The hash of the input
 *
 */
export function sha1(buffer) {
    return crypto.subtle.digest({ name: 'SHA-1' }, buffer)
        .then(new Uint8Array)
}