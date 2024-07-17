let textArea = document.querySelector("#text-to-encrypt");
let encryptButton = document.querySelector("#encrypt-button");
let decryptButton = document.querySelector("#decrypt-button");
let copyButton = document.querySelector("#btn-copy");
let darkButton = document.querySelector("#dark-mode");
let encryptedText = document.querySelector("#encrypted-text");
let decryptedText = document.querySelector("#decrypted-text");

let messageParagraph = document.querySelector("#message-paragraph");
let subtitleParagraph = document.querySelector("#subtitle-paragraph"); 
let imgMessage = document.querySelector("#img-message");

const lightSolid = document.getElementById("lightSolid");
const darkSolid = document.getElementById("darkSolid");

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

let desencrypt = (textEncrypted) => {
    let decryptedText = textEncrypted;
    for (let key in keys) {
        let value = keys[key];
        decryptedText = decryptedText.split(value).join(key);
    }
    return decryptedText;
}

function copy() {
    var copyText = encryptedText;
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    Swal.fire("Texto copiado: " + copyText.value);
}

copyButton.addEventListener("click", () => copy());

encryptButton.addEventListener("click", () => {
    let text = textArea.value;
    if(!text){
        Swal.fire("Error", "No hay texto para encriptar", "error");
    } else{
        encryptedText.value = encrypt(text);
        messageParagraph.style.display = "none";
        subtitleParagraph.style.display = "none";
        imgMessage.style.display = "none";
        copyButton.style.display = "block";
        encryptedText.style.display  ="block";
    }
});

decryptButton.addEventListener("click", () => {
    let textEncrypted = textArea.value;
    if(!textEncrypted){
        Swal.fire("Error", "No hay texto para desencriptar", "error");
    }else{
        encryptedText.value = desencrypt(textEncrypted);
        messageParagraph.style.display = "none";
        subtitleParagraph.style.display = "none";
        imgMessage.style.display = "none";
        encryptedText.style.display  ="block";
        copyButton.style.display = "block";
    }
});

darkButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDarkMode = document.body.classList.contains("dark");

    if (isDarkMode) {
        lightSolid.classList.add("fa-solid");
        lightSolid.classList.remove("fa-regular");
        darkSolid.classList.add("fa-regular");
        darkSolid.classList.remove("fa-solid");
    } else {
        lightSolid.classList.add("fa-regular");
        lightSolid.classList.remove("fa-solid");
        darkSolid.classList.add("fa-solid");
        darkSolid.classList.remove("fa-regular");
    }
});