            //sincrono

const fs = require("node:fs")

console.log("Leyendo el primer archivo")
const text = fs.readFileSync("./archivo.txt", 'utf-8')
console.log(text)   //va en forma sincrono en forma secunecial primero primerp el segundo segundo de


console.log("Hacer cosas minetras lee el archivo")

console.log("Leyendo el segundo archivo")
const secondText = fs.readFileSync("./archivo2.txt", 'utf-8')
console.log(secondText)