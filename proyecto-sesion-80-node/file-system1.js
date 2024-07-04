
const fs = require("fs")
//  const archivo = "archivoNuevo.txt"
const filePath = "archivo.txt"
const archivo2 = "archivo2.txt"

fs.writeFile(filePath, 'ested texto estara guardado en el archivo nuevo que estoy creando.\n', (err) => {
    if (err) throw err
    console.log('archivo con exito')//modificar
})

fs.readFile(filePath, 'utf-8', (err, data) => {//leeerlo
    if (err) throw err;
    console.log('el archivo contiene :', data)
})
// fs.readFile(archivo,'utf-8',(err,data)=>{
//     if(err) throw err;
//     console.log('Mi Archivo Nuevo Contiene :',data)
//  })

fs.appendFile(archivo2, 'ested contenido es contenido adicional.\n', (err) => {
    if (err) throw err;
    console.log('el contenido fue agregado corretamete')
})