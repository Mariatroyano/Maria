let tarifas= prompt("Ingresar Algunas De Las Siguientes Opciones  Para Mirar Las Tarifas ,Taxi,Metro,Autobus:    ")
let ingresekilometros= prompt("Ingresar los kilometros:")

let Transporte 

 switch (tarifas) {
    case 'taxi':
      if (ingresekilometros  <= 5) {
            console.log('Transporte = 3000')}
       else if (ingrsekilometros >= 5){
            console.log('transporte = 9000')}
       else {
            console.log('trasporte=9000')}
 break;
    case 'metro':
      if (ingresekilometros <= 5){
         console.log('Transporte= 5000')}
      else if (ingresekilometros >= 15) {
         console.log('Transporte = 11000')}
      else {
         console.log('Transporte =8000')}
          
    break;
    
      case 'autobus':
      if (ingresekilometros <= 5) {
          console.log('Transporte = 4000')}
      else if ( ingresekilometros >= 15){
         console.log ('Transporte = 8000')}
      else {
         console.log('Transporte = 6000')}
    break;
 
  default:
    console.log("Escriba su tarifa correctamente");
}
