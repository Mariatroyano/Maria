// function Organizar_Archivos(""){
    const fs = require('fs');
    const path = require('path');
    const Crear_Carpeta = (dir) =>{
        fs.mkdir("path.join(Carpeta_destino.dir"),{recursive:true},(err)=> {
            if(err){
                console.error('Error al crear la carpeta: ${err}');
            };
        };
    }
;
fs.readir(ArchivosOrganizados,(err,files)=> {
    if(err){
        console.error("Error al leer el directorio:",err);
        return;
    }
})
files.forEach((item) =>{
    const file = path.join(ArchivosOrganizados,item);
    const ExtName = path.ExtName(file);
    let destino = "";

    if (ExtName){
        const nombreCarpeta = ExtName.substring(1);
        Crear_Carpeta(nombreCarpeta);
        destino = path.join(carpeta_destino,nombreCarpeta,item);
        console.log(destino);
        fs.copyFile(file,destino,(err)=>{
            if (err){
                console.log("Error al copiar al archivo: ${item}",err);
                return;
            }
        })
    }
})

