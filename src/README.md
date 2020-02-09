# hash-js
JavaScript hash functions for Bitcoin

## Usage
```javascript
const { sha256 } = await import('https://coins.github.io/hash-js/hash.js');
const data = new Uint8Array([97, 98, 99])
await sha256( data )
```

### Convenience Classes
```javascript
const { SHA256 } = await import('https://coins.github.io/hash-js/hash.js')
const hash = await SHA256.hashUnicode('abc')
hash.toHex()
```