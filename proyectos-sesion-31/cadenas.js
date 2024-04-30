function calcularOperacion(num1, num2, operacion) {
    let resultado = (num1, num2, operaciones);
 
    switch (operacion) {
      case "suma":
        resultado = num1 + num2;
        break;
      case "resta":
        resultado = num1 - num2;
        break;
      case "multiplicacion":
        resultado = num1 * num2;
        break;
      case "division":
          resultado = num1 / num2;
        break;
      default:
        resultado = "Operación no válida";
    }
 
    return resultado;
  }
 
  let numero1 = parseInt(prompt("Ingresar un valor: "));
  let numero2 = parseInt(prompt("Ingresar un valor: "));
  let operaciones = prompt("Ingresar el nombre de la operacion que desea realizar: ");
 
  let resultado = calcularOperacion(numero1, numero2, operaciones);
  console.log(`El resultado de la operación es: ${resultado}`);

