function ingresarNumero(index){
    return parseInt(prompt("Ingresar numero " + index + ": "));
   }
   function ingresarOperacion(){
    return prompt("Ingresar la operacion que desea realizar suma, resta,multiplicasion, divicion : ");
   }
   function sumar(num1, num2) {
       return num1 + num2;
   }
   function restar(num1, num2) {
       return num1 - num2;
   }
   function multiplicar(num1, num2) {
       return num1 * num2;
   }
   function dividir(num1, num2) {
       return num1 / num2;
   }
   function calcularResultado(num1, num2, operacion) {
       let resultado;
   
       switch (operacion) {
         case "suma":
           resultado = sumar(num1, num2);
           break;
         case "resta":
           resultado = restar(num1, num2);
           break;
         case "multiplicasion":
           resultado = multiplicar(num1, num2);
           break;
         case "division":
             resultado = dividir(num1, num2);
           break;
         default:
           resultado = "Operación no válida";
       }
       return resultado;
   }
   function salida(){
       return prompt("Desea salir? (si,no): ");
   }
   
    let operacion;
    let salir;
    
    console.log(`¡Hola!`);
    while(salir != "si"){
       num1 = ingresarNumero(1);
       num2 = ingresarNumero(2);
       operacion = ingresarOperacion();
       resultado = calcularResultado(num1, num2, operacion);
       console.log(`El resultado de la operación es: ${resultado}`);
       salir = salida();
   }
   console.log(`¡Adios!`);
   
   