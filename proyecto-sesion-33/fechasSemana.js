function calcularNuevaFechaYDiaSemana() {
 
    let fechaInicial = prompt('Ingresa la fecha: ');
    let diasAAnadir = parseInt(prompt('Ingresa el número de días a añadir: '));
    let nuevaFecha = new Date(fechaInicial);
    
    nuevaFecha.setDate(nuevaFecha.getDate() + diasAAnadir);
    
    let diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    let diaSemana = diasSemana[nuevaFecha.getDay()];
    
    console.log('La nueva fecha es: ' + nuevaFecha.toISOString().split('T')[0]);
    console.log('El día de la semana correspondiente es: ' + diaSemana);
  }
  calcularNuevaFechaYDiaSemana();
