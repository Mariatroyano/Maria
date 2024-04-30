let library=[
    { title: "Cien años de soledad", author:"Gabriel Garcia Marquez",year:1967},
    {title:"1984",author:"George orwell",year:1949},
    {title:"Don Quijote de la Mancha ", author:"miguel de cervantes",year:1605},
    {title:"la Odisea",author:"Homero",year:-800}

];


let opcion=prompt('si deseas el libro por autor ingresa 1 si deseas en libro por año ingresa 2 si deseas ver todos los libros de la biblioteca ingresa 3: ')
if(opcion==='1'){
let autor= prompt('ingresar nombre del autor: ');
for(let i =0;i< library.length; i++){
    if (autor === library[i].author){
        console.log('libro disponible:' + library[i].title + ' Autor:'+ library[i].author + 'Año:' + library[i].year)
        console.log(library[i])
    }  
    }
}else if(opcion==='2'){
    let año = parseInt(prompt('ingresa el año que deseas buscar:'));
    for(let i =0; i < library.length; i++){
        if(año === library[i].year) {
    console.log('libro disponible:' + "Titulo" + library[i].title + 'autor: ' + library[i].author + 'año:' + library[i].year);
            console.log(library[i])
        }
    }
}else if(opcion==='3'){
    for(let i =0;i < library.length;i++){
            console.log('libro disponible:'+ library[i].title + ' autor:' + library[i].author + 'año :' + library[i].year)
    }
}