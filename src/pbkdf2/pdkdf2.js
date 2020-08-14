/**
 * 
 * Derive bits from password and salt using pbkdf2.
 * 
 * @param  {Buffer} password   The password.
 * @param  {Buffer} salt       The salt.
 * @param  {String} hashFn     The hash function.
 * @param  {Number} iterations The number of iterations.
 * @param  {Number} keyLength  Length of the derived key in bytes.
 * @return {ArrayBuffer}       The derived bits.
 * 
 */
export async function pbkdf2(password, salt, hashFn = 'SHA-256', iterations = 2048, keyLength = 32) {

    const importedKey = await crypto.subtle.importKey('raw', password,  'PBKDF2', false, ['deriveBits'])
    
    const params = { name: 'PBKDF2', salt: salt,  hash: hashFn , iterations: iterations }
    const derivedBits = await crypto.subtle.deriveBits(params, importedKey, keyLength * 8 )

    return derivedBits
}