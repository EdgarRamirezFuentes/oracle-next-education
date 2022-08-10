import {
    encrypt_message, 
    decrypt_message,
    validateMessage
} from './cipher.js';

import {showMessage} from './alerts.js'

window.addEventListener('DOMContentLoaded', () => {
    // HTML elements
    const messageInput = document.getElementById('message-input');
    const messageOutput = document.getElementById('message-output');
    const encryptButton = document.getElementById('encrypt-btn');
    const decryptButton = document.getElementById('decrypt-btn');
    const copyButton = document.getElementById('copy-btn');
    const statusMessage = document.getElementById('status-message');

    // Functions 
    /**
     * Show the output of the action
     * @param {string} output - The output that will be shown 
     * @param {string} status - The current status ofthe output (encrypted or decrypted)
     */
    function showOutput(output, status) {
        showMessage(`The message was ${status} succesfully`, 'success');
        statusMessage.innerText = `The ${status} message is:`;
        messageOutput.innerText = output;
        copyButton.style.display = 'block';
    }

    /**
     * Restart the output side for a new operation
     */
    function restartOutputSide() {
        statusMessage.innerText = `No message was found!`;
        messageOutput.innerText = 'Input the message that you\'d like to encrypt or decrypt.';
        copyButton.style.display = 'none';
    }

    // Event listeners
    encryptButton.addEventListener('click', () => {
        const input_message = messageInput.value;
        const isValidMessage = validateMessage(input_message);

        messageInput.value = '';

        if (!isValidMessage) {
            showMessage('Input a valid message', 'error');
            restartOutputSide();
            return;
        }

        const encrypted_message = encrypt_message(input_message);
        showOutput(encrypted_message, 'encrypted');
    });

    decryptButton.addEventListener('click', () => {
        const input_message = messageInput.value;
        const isValidMessage = validateMessage(input_message);

        messageInput.value = '';

        if (!isValidMessage) {
            showMessage('Input a valid message', 'error');
            restartOutputSide();
            return;
        }

        const decrypted_message = decrypt_message(input_message);
        showOutput(decrypted_message, 'decrypted');
    });

    copyButton.addEventListener('click', () => {
        const text = messageOutput.innerText;
        navigator.clipboard.writeText(text);
        showMessage(`${text} copied to the clipboard`, 'success');
    });
});