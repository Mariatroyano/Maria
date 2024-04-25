function imprimirtriangulo(alto, ancho){
    let fila = '';
	for (let i= 0; i<= ancho; i++){
    	for(let j = 0; j <= alto; j++){
           fila += '* '
        }
    console.log(fila );
    }
}

imprimirtriangulo(0,5);


