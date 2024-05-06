let resultado = ''
let numeroUsuario =''
let numeroSecreto =''
let intentos = 0
console.log(numeroSecreto)
function iniciar(){
    numeroSecreto = parseInt(Math.random() * 100)
}
function adivinar(numero, secreto){
    intentos ++
    numeroUsuario = document.getElementById('inputGuess').value 
        if (numeroUsuario < numeroSecreto){
            resultado = ("intenta un numero mas alto")
          }
         else if (numeroUsuario > numeroSecreto){
                resultado = ("intenta un numero mas bajo")
            }
         else{ resultado = (`Felicidades! adivinates el numero en ${intentos} intentos` )}
  
    document.getElementById('resultado').innerText = resultado
}