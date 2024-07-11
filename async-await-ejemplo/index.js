
// const path = require('path');

// // Función para simular una pausa
// const delay = ms => new Promise(resolve => setTimeout(resolve, ms));


// async function asyncAwait() {
//   // aqui lo que me estad es leyendo un archivo
//   const data =  path.readFile('archivo.txt', 'utf8');
//   console.log('Mis datos se encuentran leidos:', data);


//   // que seme demore 2 segundos 
//   await delay(2000);
//   console.log('Pausa...Completada');

//   // Escribir datos en un archivo
//   const newData = `${data}\nNuevos datos añadidos.`;
// //   await path.writeFile('miArchivo.txt', newData);
//   console.log('Mis Datos ya se encuentran en mi archivo txt');
// }

// asyncAwait();


const fs = require("fs");//libreri que teno q utilizar 

// Función para simular una pausa
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function asyncAwait() {

  fs.writeFile('archivo.txt', 'este es lo que hay en el archivo\n' , ()=>{
})
    console.log('Buscandos Datos:');

    // que seme demore 2 segundos 
    await delay(2000);
    
    console.log('Archivos encontrados Pausa...Completada');
    console.log('Mis Datos ya se encuentran en mi archivo txt');
      // aqui lo que me estad es leyendo un archivo
    fs.readFile('archivo.txt', 'utf-8', (err , data)=>{
        console.log('Datos encontrados: ',data);
        return data
    });
}
asyncAwait();
