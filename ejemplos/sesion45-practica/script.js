import { sumar, restar, multiplicar, dividir, potencia, raiz } from "./mathOperations.js";

import { redondeo, valor } from "./utilities.js";

function calcular(operacion) {
    console.log('hola')
    let num1 = parseFloat(document.getElementById('Numero1').value)
    let num2 = parseFloat(document.getElementById('Numero2').value)
   
    let operador = document.getElementById("operador")
    let resultado = document.getElementById('resul')
    
    switch (operacion) {
        case "sumar":
            operador.innerText = "+"
            console.log(sumar(num1, num2));
            resultado.textContent = sumar(num1, num2)
            break;

        case "restar":
            operador.innerText = "-"
            console.log(restar(num1, num2));
            resultado.textContent = restar(num1, num2)

            break;

        case "multiplicar":
            operador.innerText = "*"
            console.log(multiplicar(num1, num2));
            resultado.textContent = multiplicar(num1, num2)
            break;

        case "dividir":
            operador.innerText = "/"
            console.log(dividir(num1, num2));
            resultado.textContent = dividir(num1, num2)
            break;
        case "potencia":
            operador.innerText = "**";
            resultado.textContent = potencia(num1, num2);
            break;
        case "raiz":
            operador.innerText = "√";
            console.log(raiz(num1, num2));
            resultado.textContent = raiz(num1,num2);
            break;
        default:
            break;
    }
}

function calcular2(operacion) {
    console.log('hola')
    let num = parseFloat(document.getElementById('Numero').value)
   
    let resultado2 = document.getElementById('resul2')
    
    switch (operacion) {
        case "redondear":
            operador2.innerText = "≈"
            console.log(redondeo(num));
            resultado2.textContent = redondeo(num)
            break;

        case "valor":
            operador2.innerText = "||"
            console.log(valor(num));
            resultado2.textContent = valor(num)
            break;

        default:
            break;
    }
}

window.calcular = calcular
window.calcular2 = calcular2
