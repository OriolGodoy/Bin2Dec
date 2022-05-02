function HexaJS() {
    var texto = document.getElementById("texto-1")
    var input = document.getElementById("numero").value
    var error = document.getElementById("error")
    var final = document.getElementById("resultado")
    final.innerHTML = parseInt(input, 16)
    var errores = input.charAt(input.length - 1)
    if (errores == 0 || errores == 1 || errores == 2 || errores == 3 || errores == 4 || errores == 5 || errores == 6 || errores == 7 || errores == 8 || errores == 9 || errores == "A" || errores == "B" || errores == "C" || errores == "D" || errores == "E" || errores == "F" || errores == "a" || errores == "b" || errores == "c" || errores == "d" || errores == "e" || errores == "f") {
        texto.innerHTML = "Número convertido"
        error.innerHTML = ''
    } else {
        texto.innerHTML = ""
        error.innerHTML = "Entra un digito Hexadecimal"
    }
    if (numero == '') {
        texto.innerHTML = ''
        error.innerHTML = ''
    }
}