const os = require("os")

function obtenerInfoSistema (){
return{
    plataforma: os.platform(),
    arquitctura: os.arch(),
    infoGenral: os.platform(),
    nombreSistema: os.type(),
    tiempoSistema: os. uptime(),
    infoMemeria: os.totalmem(),
    

}
}
function prendidoComputo (){
return{
    infoDeEncendidoComputo: os.uptime()
}
}

//vamos a declarar la funcion suma 
function suma (a,b) {
return a+b
}


function resta (a,b){
    return a-b
}
module.exports = {
    suma,
    resta,
    obtenerInfoSistema,
    prendidoComputo 


};