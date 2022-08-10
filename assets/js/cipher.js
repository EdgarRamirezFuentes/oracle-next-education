/**
 * Encrypt a string.
 * @param {string} plaintext - The message to encrypt.
 * @returns {string} The encrypted message.
 */
export function encrypt_message(plaintext) {
    const cipher = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat',
    }

    let encrypted_message = '';

    // Encrtypting the message
    for (let i = 0; i < plaintext.length; i++) {
        let letter = plaintext[i];
        encrypted_message += cipher[letter] ? cipher[letter] : letter;
    }
    return encrypted_message;
}

/**
 * Decrypt a string.
 * @param {string} encrypted_message - The message to decrypt.
 * @returns {string} The decrypted message.
 */
export function decrypt_message(encrypted_message) {
    const decipher = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u',
    }

    let decrypted_message = encrypted_message;

    // Decrypting the message
    for (const vowel in decipher) {
        const regex = new RegExp(vowel, 'gi');
        decrypted_message = decrypted_message.replace(regex, decipher[vowel]);
    }
    return decrypted_message;
}

/**
 * Validate that the message only contains english lowercase letters and spaces.
 * @param {string} message - The message to validate.
 * @returns {boolean} True if the message is valid, false otherwise.
 */
export function validateMessage(message) {
    const regex = /^[a-z][a-z\s\-]*$/g;
    return regex.test(message);
}