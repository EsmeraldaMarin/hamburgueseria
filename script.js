const select_tipoHamburguesa = document.getElementById('tipoHambur')
const select_tipoPan = document.getElementById('tipoPan')
const select_tipoAdherezo = document.getElementById('tipoAdherezo')
const select_tipoCarne = document.getElementById('tipoCarne')
const select_cantidadCarne = document.getElementById('cantidadCarne')
const select_tipoAdicionales = document.getElementById('tipoAdicionales')
const select_queso = document.getElementById('queso')
const botonEnviar = document.getElementById('enviar')
const mensajeDelPedido = document.getElementById('mensajeFinal')
let tipoHamburguesa, tipoPan, tipoAdherezo, tipoCarne, cantidadCarne, tipoAdicionales, queso = ''
let esVeggie = true

function definirOpcionSeleccionada(select) {
    let opcionSeleccionada = select.selectedOptions[0].innerText
    return opcionSeleccionada
}

function definirPedido() {
    tipoPan = definirOpcionSeleccionada(select_tipoPan)
    tipoAdherezo = definirOpcionSeleccionada(select_tipoAdherezo)
    tipoCarne = definirOpcionSeleccionada(select_tipoCarne)
    cantidadCarne = definirOpcionSeleccionada(select_cantidadCarne)
    tipoAdicionales = definirOpcionSeleccionada(select_tipoAdicionales)
    queso = definirOpcionSeleccionada(select_queso)
}
function verificacionRequisitos() {

    tipoHamburguesa = definirOpcionSeleccionada(select_tipoHamburguesa)

    //Refrescar valor
    esVeggie = true

    if (tipoHamburguesa == 'Vegana') {
        switch (tipoCarne) {
            case 'Carne de ternera':
                esVeggie = false
            case 'Pechuga de pollo':
                esVeggie = false
            case 'Medallon de pollo':
                esVeggie = false
            case 'Medallon de pescado':
                esVeggie = false
            case 'Carne de ternera':
                esVeggie = false
        }
    }
    return esVeggie
}
function mensajeFinal(verificacion) {
    let mensaje = ''
    if (!verificacion) {
        mensaje = `Lo que usted ingreso no cumple con la definicion de una hamburguesa ${tipoHamburguesa}`
    } else if (queso == 'Si') {
        mensaje = `Usted pidio una hamburguesa de ${cantidadCarne} ${tipoCarne} con ${tipoPan}. 
        Con ${tipoAdherezo} como adherezo, ${tipoAdicionales} como adicional y con queso `
    } else {
        mensaje = `Usted pidio una hamburguesa de ${cantidadCarne} ${tipoCarne} con ${tipoPan}. 
        Con ${tipoAdherezo} como adherezo, ${tipoAdicionales} como adicional y sin queso `
    }

    mensajeDelPedido.innerHTML = mensaje
}

botonEnviar.addEventListener('click', function () {
    definirPedido()
    let verificacion = verificacionRequisitos()
    mensajeFinal(verificacion)
})


