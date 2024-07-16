
const fs = require("fs");//libreri que tengo q utilizar 

// Función para simular una pausa
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function asyncAwait() {

  fs.writeFile('archivo.txt', 'este es lo que hay en el archivo\n' , ()=>{//para q me escriba en un archivo y si existe lo crea
})
    console.log('Buscandos Datos:');

    // que seme demore 2 segundos 
    await delay(6000);
    
    console.log('Archivos encontrados Pausa...Completada');
    console.log('Mis Datos ya se encuentran en mi archivo txt');
      // aqui lo que me estad es leyendo un archivo
    fs.readFile('archivo.txt', 'utf-8', (err , data)=>{
        console.log('Datos encontrados: ',data);
        return data
    });
}
asyncAwait();
