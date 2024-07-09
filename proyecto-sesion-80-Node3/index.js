const path = require('path');

//ruta de ejemplos windows
const filePath = "C:\Users\maria\OneDrive\Escritorio\mi_repositorio\Maria\proyecto-sesion-80-Node3\persona.jpg";


//obtener el nombre del archivo
const baseName = path.basename(filePath);
console.log(`Base Name: ${baseName}`);


//obtener el nombre del directorio el folder la carpeta
const dirName = path.dirname(filePath);
console.log(`Dir Name: ${dirName}`);



//se obtiene la extencion del archivo si es jpg o npg
const extName = path.extname(filePath);
console.log(`Ext Name: ${extName}`);


//unir varios segmentos de rutas
const joinedPath = path.join('/Users','/maria','/OneDrive','/Documentos');
console.log(`Joined Path: ${joinedPath}`);


//pone la ruta en q stamos trabajando y el archivo que hemos puesto
//resuelve una ruta absoluta
const resolvedPath = path.resolve('examples.txt');
console.log(`Resolve path: ${ resolvedPath}`);


//para imprrimir la ruta como un objeto
const parsedPath = path.parse(filePath);
console.log(`Parsed path:`, parsedPath);


//formatea un objeto de ruta a una cadena 
const formattedPath = path.format(parsedPath);
console.log(`Formatted Path: ${formattedPath}`);


//cambia la extencion de un archivo
const newFilePath = path.format({
    ...parsedPath,
    base:undefined,
    ext:'.md'
});
console.log(`New File Path: ${ newFilePath}`);

