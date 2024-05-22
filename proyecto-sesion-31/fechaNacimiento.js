function calcularEdad(fechaNacimiento) {
    let fechaActual = new Date();
    let añoActual = fechaActual.getFullYear(); 
    let mesActual = fechaActual.getMonth() + 1; 
    let diaActual = fechaActual.getDate();

    let totalAño = añoActual - añoNacimiento
    let meses = mesActual - mesNacimiento;
    let totalDia = (diaActual - diaNacimiento) + (meses*30);
    if (totalDia < 0){
      totalAño = totalAño -1
      totalDia = totalDia * -1
    }
    edad.años = totalAño
    edad.dias = totalDia

    console.log(edad)


let diaNacimiento = parseInt(prompt("Ingresar día de nacimiento: "));
let mesNacimiento = parseInt(prompt("Ingresar mes de nacimiento: "));
let añoNacimiento = parseInt(prompt("Ingresar año de nacimiento: "));
let edad = {
    años:0,
    dias:0
}
    
calcularEdad()  
}
    
calcularEdad()


