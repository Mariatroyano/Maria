let operacion = prompt("indique la escala de temperatura: " );
let resultadototal =''
function temperatura(t) {

    switch (operacion) {
      case "Celsius":
        resultadototal = ((t * 9/5) + 32 ).toFixed(2)
        break;
      case "Fahrenheit":
        resultadototal = ((t - 32) * (5/9)).toFixed(2)
        break;
      default:
        resultadototal = "Operación no válida";
    }
    return resultadototal;
  }
  let numero  = parseFloat(prompt("Ingresar un valor: "));
  let resultad = temperatura(numero);
  console.log(`El resultado de la operación es: ${resultad}`);



