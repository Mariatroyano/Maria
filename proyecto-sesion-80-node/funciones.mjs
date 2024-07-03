import { platform, arch, type, uptime, totalmem } from "os"

function obtenerInfoSistema (){
return{
    plataforma: platform(),
    arquitctura: arch(),
    infoGenral: platform(),
    nombreSistema: type(),
    tiempoSistema: uptime(),
    infoMemeria: totalmem(),
    

}
}
function prendidoComputo (){
return{
    infoDeEncendidoComputo: uptime()
}
}

//vamos a declarar la funcion suma 
function suma (a,b) {
return a+b
}


function resta (a,b){
    return a-b
}
export default {
    suma,
    resta,
    obtenerInfoSistema,
    prendidoComputo 


};