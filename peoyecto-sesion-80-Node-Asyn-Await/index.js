// function delay (ms){//dlay espera 
//     return new Promise(resolve => setTimeout(resolve,ms))
// }
// //declaramos la funcion asincrona para usar el await 

// async function nombreFuncion(){
//     console.log("esperando 5 segundos ")
//     await delay(5000)//5000 milisegundos
//     console.log("Han pasado 5 segundos")
// }

// nombreFuncion()
//traer datos con una funcion asincrona 


//estad funcion simula una funcion a una api y devuelve datos de 1 segundo
function fetchData(){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve({ data:'Hello , world!'});
        },1000);
    });
}
//funcion asincrona que usa 'await' para obtener datos
 async function getDatos() {
    console.log('Obteniendos datos.......');
    const result = await fetchData();//espera aqui los datos sean obtenidos
    console.log('Datos Obtenidos Exitosamente',result);
 }
 //ejecuta la funcion 
 getDatos();