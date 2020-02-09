# hash.js
JavaScript hash functions for Bitcoin

## Usage
```javascript
const { sha256 } = await import('https://coins.github.io/hash-js/hash.js');
const data = new Uint8Array([97, 98, 99])
await sha256( data ) // ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad
```

### Convenience Classes
```javascript
const { SHA256 } = await import('https://coins.github.io/hash-js/hash.js')
const hash = await SHA256.hashUnicode('abc')
hash.toHex() // ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad
```