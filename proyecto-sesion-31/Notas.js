
function promedioNotas(nota1,nota2,nota3,nota4,nota5){
    let resultado 
    resultado = parseFloat(nota1) + parseFloat(nota2)+ parseFloat(nota3) +                          parseFloat(nota4) + parseFloat(nota5)

resultado = resultado / 5
return resultado 
}
let nota1 = parseFloat(prompt("ingrese nota : "));
let nota2 = parseFloat(prompt("ingrese nota: "));
let nota3 = parseFloat(prompt("ingrese nota: "));
let nota4 = parseFloat (prompt("ingrese nota: "));
let nota5=parseFloat(prompt("ingrese nota: "));

let promedio = promedioNotas(nota1,nota2,nota3,nota4,nota5) 

console.log (promedio)
     
                     


