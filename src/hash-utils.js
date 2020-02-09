import { Buffer } from '../../buffer-js/src/buffer.js'
import * as Utils from '../../buffer-js/src/buffer-utils.js'



export function instanciateClass(hashFn, hashLength) {

    class Hash extends Buffer {

        static async hash(bytes) {
            const hash = await this.prototype.constructor._digest(bytes)
            return new this.prototype.constructor(hash)
        }

        static hashUnicode(string, encoding) {
            const bytes = Utils.fromUnicode(string, encoding)
            return this.prototype.constructor.hash(bytes)
        }

        static length() { return hashLength }

        static get _digest() {
            return hashFn
        }
    }

    return Hash
}