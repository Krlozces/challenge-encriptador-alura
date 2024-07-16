let textArea = document.querySelector("#text-to-encrypt");
let encryptButton = document.querySelector("#encrypt-button");
let decryptButton = document.querySelector("#decrypt-button");
let copyButton = document.querySelector("#btn-copy");
let encryptedText = document.querySelector("#encrypted-text");
let decryptedText = document.querySelector("#decrypted-text");
let keyError = document.querySelector("#key-error");

let messageParagraph = document.querySelector("#message-paragraph");
let subtitleParagraph = document.querySelector("#subtitle-paragraph"); 
let imgMessage = document.querySelector("#img-message");

const keys = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat" 
}

let encrypt = (text) => {
    let encryptedText = text.split('').map((letter) => {
        if (keys[letter]) {
            return keys[letter];
        } else {
            return letter;
        }
    }).join('');
    return encryptedText;
}

encryptButton.addEventListener("click", () => {
    let text = textArea.value;
    encryptedText.value = encrypt(text);
    messageParagraph.style.display = "none";
    subtitleParagraph.style.display = "none";
    imgMessage.style.display = "none";
    copyButton.style.display = "block";
    
});