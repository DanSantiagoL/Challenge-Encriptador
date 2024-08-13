const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

// Validación: Permitir solo letras minúsculas y sin acentos
textArea.addEventListener("input", function (event) {
    const regex = /^[a-z\s]*$/; // Expresión regular para letras minúsculas y espacios
    if (!regex.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^a-z\s]/g, "");
      alert("Solo se permiten letras minúsculas y sin acento.");
    }
  });


  
  function btnEncriptar() {
    if (textArea.value.trim() === "") {
        alert("El campo de texto está vacío. Por favor, ingrese un texto para encriptar.");
        return;
    }
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptado){
    
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    return stringEncriptado
}

function btnDesencriptar() {
    if (textArea.value.trim() === "") {
        alert("El campo de texto está vacío. Por favor, ingrese un texto para desencriptar.");
        return;
    }
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function desencriptar(stringDesencriptado){
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][0])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }

    }
    return stringDesencriptado
}
function btnCopiar() {
    mensaje.select();
    document.execCommand("copy");
    alert("Texto copiado en el portapapeles");
}