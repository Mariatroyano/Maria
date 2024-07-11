const fs = require("fs");//libreri que teno q utilizar 

// Función para simular una pausa
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
async function asyncAwait() {
  
  // aqui lo que me estad es leyendo un archivo
  fs.readFile('archivo.txt', 'utf-8', (err , data)=>{
      console.log('Buscandos Datos:' , data);
      return data
      
  });
   // que seme demore 2 segundos 
   await delay(2000);
  fs.writeFile('input.txt', 'Bienvenidos a mi trabajo \n' , ()=>{
    console.log('Mis Datos ya se encuentran en mi archivo txt');
})
}
asyncAwait();