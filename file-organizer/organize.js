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
            // if (Accion == "mover"){
            //     fs.unlink(file,(err) => {
            //         if 
            //     })
            // }
        })
    }
})
// const fs = require('fs');
// const path = require('path');

// // Directorio de entrada
// const inputDir = path.join(__dirname, 'input_files');

// // Leer los archivos del directorio de entrada
// fs.readdir(inputDir, (err, files) => {
//     if (err) {
//         console.error('Error reading directory:', err);
//         return;
//     }

//     // Procesar cada archivo
//     files.forEach(file => {
//         const ext = path.extname(file).substring(1); // Obtener la extensión del archivo
//         const extDir = path.join(inputDir, `${ext}_files`); // Crear la carpeta de destino

//         // Verificar si la carpeta de destino existe, si no, crearla
//         if (!fs.existsSync(extDir)) {
//             fs.mkdirSync(extDir);
//         }

//         // Mover el archivo a la carpeta correspondiente
//         const oldPath = path.join(inputDir, file);
//         const newPath = path.join(extDir, file);

//         fs.rename(oldPath, newPath, err => {
//             if (err) {
//                 console.error('Error moving file:', err);
//                 return;
//             }
//             console.log(`Archivo ${file} movido a ${extDir}`);
//         });
//     });
// });

