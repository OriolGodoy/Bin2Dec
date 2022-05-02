function ChangeJS() {
    var hexadecimal = document.getElementById("hexa")
    var input = document.getElementById("select").value
    var binario = document.getElementById("bin")
    var aplicacion = {

        campoTexto: null,
        lista: null,

        funcion1: function OriJS() {
            // lo que querés que haga la funcion1
            alert('funcion1');
        },

        funcion2: function HexaJS() {
            // lo que querés que haga la funcion2
            alert('funcion2');
        },

        asignarFuncion: function() {
            var valor = aplicacion.lista.value;

            if (valor === 'bin') {
                aplicacion.campoTexto.onclick = aplicacion.funcion1;
            } else if (valor === 'hexa') {
                aplicacion.campoTexto.onclick = aplicacion.funcion2;
            }
        },

        asignarEventos: function() {
            aplicacion.lista.onchange = aplicacion.asignarFuncion;
            aplicacion.asignarFuncion();
        }
    };

    window.onload = function() {
        aplicacion.campoTexto = document.getElementById('select');
        aplicacion.asignarEventos();
    }
}