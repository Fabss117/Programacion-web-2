var carrito = []
var seguir = true

while (seguir) {
    var fruta = prompt("¿Qué fruta quieres agregar al carrito?")
    if (fruta == null) {
        var confirmar = confirm("¿Seguro que quieres terminar tu compra?")
        if (confirmar) {
            seguir = false
        }
    } else {
        carrito.push(fruta)
    }
}

console.log("Listo, esto es lo que compraste:")
for (var i = 0; i < carrito.length; i++) {
    console.log(carrito[i])
}