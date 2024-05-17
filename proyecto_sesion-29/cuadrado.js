function imprimirCuadrado(alto , ancho){
	for (let i= 1; i<= ancho; i++){
	let fila = '';
	for(let j = 1; j <= alto; j++){
       fila += `*`;
}
console.log(fila );
}
}

imprimirCuadrado(5,2);
