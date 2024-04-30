
function calcularAreaRectangulo(base, altura) {
 

    let Area = base * altura
    let Perimetro = (base + altura)* 2;
        return {Area, Perimetro};
   }
   let base = parseFloat(prompt("ingrese el area del Rectangulo: "))
   let altura = parseFloat(prompt("ingrese Perimetro: "))
   
   let resultado = calcularAreaRectangulo(base,altura);
   console.log("el area del rectangulo es:" , resultado.Area );
   console.log("perimetro del rectangulo es :", resultado.Perimetro);
   
   
   
   
   