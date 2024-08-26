function encriptar(texto) {
    // definí un objeto con las reglas de encriptación definidas en el reto alura-challenge
    const reglas = {
        'e': 'enter',   
        'i': 'imes',    
        'a': 'ai',      
        'o': 'ober',    
        'u': 'ufat'     
    };


    return texto.replace(/[eioua]/g, letra => reglas[letra]);
}

function desencriptar(texto) {
    
    const reglas = {
        'enter': 'e',  
        'imes': 'i',   
        'ai': 'a',      
        'ober': 'o',    
        'ufat': 'u'     
    };

    return texto.replace(/enter|imes|ai|ober|ufat/g, reemplazo => reglas[reemplazo]);
}

// event listener para el botón de encriptar
document.querySelector('.boton-encriptar').addEventListener('click', function() {
    
    let texto = document.querySelector('.caja-texto').value;

    // verifica si el texto es válido
    if (!validarTexto(texto)) {
        alert('por favor, ingresa solo letras minúsculas sin acentos.'); 
        return; // sale de la función si el texto no es válido
    }

    let resultado = encriptar(texto);
    document.querySelector('.mensaje').textContent = resultado;
});

// event listener para el botón de desencriptar
document.querySelector('.boton-desencriptar').addEventListener('click', function() {
    
    let texto = document.querySelector('.caja-texto').value;

    // verifica si el texto es válido
    if (!validarTexto(texto)) {
        alert('por favor, ingresa solo letras minúsculas sin acentos.'); 
        return; 
    }

    let resultado = desencriptar(texto);
    document.querySelector('.mensaje').textContent = resultado;
});

// event listener para el botón de copiar
document.querySelector('.boton-copiar').addEventListener('click', function() {
    
    let mensaje = document.querySelector('.mensaje').textContent;

    // copia el texto al portapapeles
    navigator.clipboard.writeText(mensaje);

    alert('texto copiado al portapapeles');
});

function validarTexto(texto) {
    const regex = /^[a-z\s]*$/;
    return regex.test(texto) || texto.includes('!');
}