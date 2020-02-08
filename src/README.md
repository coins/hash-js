# hash-js
JavaScript hash functions for Bitcoin

## Usage
```javascript
cont { sha256 } = await import('https://coins.github.io/hash-js/hash.js');
const data = new Uint8Array([1, 2, 3])
await sha256( data )
```

### Together with Buffer
```javascript
const { sha256 } = await import('https://coins.github.io/hash-js/hash.js')
const Buffer = await import('https://coins.github.io/buffer-js/buffer.js')
Buffer.toHex( await sha256( Buffer.fromUnicode('abc') ) )
```