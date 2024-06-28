// console.log("hola mundo")
// console.log("este es mi primer programa de node js ")

//index nuestro archivo principal
const {suma, resta, obtenerInfoSistema, prendidoComputo} = require(`./funciones`)

var sumaDeDosNumeros = suma(15,19)
var restataDeDosNumeros = resta(29,9)
console.log("La suma de los dos numeros es :",sumaDeDosNumeros)
console.log("La resta de los dos numetos es :",restataDeDosNumeros)



var infomacionComputo = obtenerInfoSistema()
console.log("la informacion es :",infomacionComputo)

var computo = prendidoComputo()
console.log("la informacion de de encendido del computador es :",computo)
