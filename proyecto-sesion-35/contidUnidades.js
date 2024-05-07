
let resultadoTotal
let numUsuario = ''
let operacion='10'
function temperatura(){
    operacion = document.getElementById("conversor").innerHTML
    console.log(operacion)
     numUsuario = document.getElementById("numUsuario").value

    switch (operacion) {
      case "1"://C a F
           resultadoTotal = (`De Celsius a Fahrenheit es ${((numUsuario * 9/5) + 32 ).toFixed(2)}`)
        break;
      case "2"://F a C
           resultadoTotal = 'De Fahrenheit a Celsius es '+((numUsuario - 32) * (5/9)).toFixed(2)
        break;
     case "3":
           resultadoTotal = 'De kilometros a Millas es '+numUsuario * 1.609;
         break;
     case '4':
          resultadoTotal = 'De Millas a kilometros es '+numUsuario / 1.609;
          break;
      default:
           resultadoTotal = "Operación no válida";
    }
    document.getElementById("resultadoTotal").innerText = resultadoTotal;
  }
