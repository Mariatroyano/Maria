const fs = require('fs')
const filePath = 'archivoNuevo.txt'

fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) throw err;
    console.log("El contenido original del archivo es: \n", data)
    nuevoContenido = 'nuevo contenido '
    fs.writeFile(filePath, nuevoContenido, (err) => {
        if (err) throw err;
        console.log("Archivo edictado con exito")
    })
})
fs.readFile(filePath, 'utf-8', (err, updatadData) => {
    if (err) throw err;
    console.log('Contenido actualizaddo del archivo:\n', updatadData);
});