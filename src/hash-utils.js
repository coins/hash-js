import { Buffer } from '../../buffer-js/src/buffer/buffer.js'
import * as Utils from '../../buffer-js/src/buffer-utils/buffer-utils.js'

export function instanciateClass(hashFn, hashLength) {

    class Hash extends Buffer {

        static async hash(bytes) {
            const hash = await hashFn(bytes)
            return new this.prototype.constructor(hash)
        }

        static hashUnicode(string, encoding) {
            const bytes = Utils.fromUnicode(string, encoding)
            return this.prototype.constructor.hash(bytes)
        }

        static hashHex(string, encoding) {
            const bytes = Utils.fromHex(string, encoding)
            return this.prototype.constructor.hash(bytes)
        }

        static length() { return hashLength }

    }

    return Hash
}