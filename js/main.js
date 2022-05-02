function OriJS() {
    var texto = document.getElementById("texto-1")
    var input = document.getElementById("numero").value 
    var error = document.getElementById("error")
    var final = document.getElementById("resultado")
    final.innerHTML = parseInt(input, 2)
    var errores = input.charAt(input.length - 1)
    if (errores == 0 || errores == 1) {
        texto.innerHTML = "Número convertido"
        error.innerHTML = ''
    }
    else {
        final.innerHTML = 'Listo? Inserte un dígito'
    }
    if (errores >> 1 || errores >> 10000) {
        texto.innerHTML = ''
        error.innerHTML = 'Esos digitos no son validos (digitos válidos 0 o 1)'
    }
    if (final.innerHTML == "NaN") {
        final.innerHTML = "Inserte un digito porfavor"
    }
}