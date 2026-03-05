var dato1 = parseInt(prompt("Ingresa numero 1"))
var dato2 = parseInt(prompt("Ingresa numero 2"))

console.log("Numero 1: " + dato1)
console.log("Numero 2: " + dato2)

if (dato1 > dato2) {
    console.log("El dato 1 ES MAYOR que el dato 2")
} else if (dato1 < dato2) {
    console.log("El dato 1 ES MENOR que el dato 2")
} else {
    console.log("Ambos números SON IGUALES")
}