let numero = prompt("ingrese numero: ")
function fib(numeros){
    let fibonacci = [0,1]
    for(let i= 2; i < numeros; i++ ){
        fibonacci[i]=fibonacci[i-1] + fibonacci[i-2]
        
    }
    console.log(fibonacci) 
    
}
fib(numero)


