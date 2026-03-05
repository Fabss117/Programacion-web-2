var dato1 = parseInt(prompt("Ingresa numero 1"))
var dato2 = parseInt(prompt("Ingresa numero 2"))

console.log("Tu primer numero es " + dato1)
console.log("Tu segundo numero es " + dato2)

console.log("Ambos positivos? (&&) " + (dato1 > 0 && dato2 > 0))
console.log("Al menos uno positivo (||) " + (dato1 > 0 || dato2 > 0))
console.log("El dato 1 no es mayor " + !(dato1 > dato2))

console.log("dato1 > dato2  " + (dato1 > dato2))
console.log("dato1 < dato2  " + (dato1 < dato2))
console.log("dato1 >= dato2 " + (dato1 >= dato2))
console.log("dato1 <= dato2 " + (dato1 <= dato2))
console.log("dato1 == dato2 " + (dato1 == dato2))
console.log("dato1 != dato2 " + (dato1 != dato2))