

let objetos = [{
    Nombre : "buso",
    precio : 25000
},{
    Nombre : "camiseta",
    precio : 15000
},{
    Nombre : "pantalón",
    precio : 45000
    
},{
    Nombre : "zapatos",
    precio: 70000
}]
function precioCompras(){
    let resultado
    resultado = parseFloat("Todos mis precios de mis productos")
    resultado ="0"
    return resultado
}
function mostrarObjetos(){
console.log("precio")
console.log("mis objetos: ")
objetos.forEach((item)=>console.log(`${item.Nombre}-precio $${item.precio}`))
}
let continuar = true
while(continuar){
let operacion = prompt('Ingrese algun producto que desee comprar: ')
switch(operacion){
    case "pantalon":
    console.log(`su compra ha sido exitosa de un hermoso pantalon \nEl precio del pantalon es:${(objetos[2].precio)}`);
    break;
    
    case "camiseta":
    console.log(`su compra ha sido exitosa de una hermosa camiseta\nEl precio de la camiseta es: ${(objetos[1].precio)}`);
        
    
    break;
    
    case "zapatos":
    console.log(`su compra ha sido exitosa de unos hermoso zapatos\nEl precio de los zapatos es: ${(objetos[3].precio)}`);
    break;
    
    case "buso":
    console.log(`su compra ha sido exitosa de un hermoso buso\nEl precio del buso es: ${(objetos[0].precio)}`)
    break;
    case "comprar todo":
    console.log("Comprar todo")
    break;
    default:
    console.log("Operacion Invalida")
}

}
