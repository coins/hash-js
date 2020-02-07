export function sha256(buffer) {
    return crypto.subtle
        .digest({ name: 'SHA-256' }, buffer)
        .then(new Uint8Array)
}

export function sha256d(buffer) {
    return sha256(buffer).then(sha256);
}

export function sha512(buffer) {
    return crypto.subtle
        .digest({ name: 'SHA-512' }, buffer)
        .then(new Uint8Array)
}

export function sha1(buffer) {
    return crypto.subtle
        .digest({ name: 'SHA-1' }, buffer)
        .then(new Uint8Array)
}