const {
    crearArchivoDiario,
    leerDiario,
    agregarEntrada,
    editarEntrada,
  } = require("./script");
  
  // Crear el archivo del diario
  crearArchivoDiario();
  
  // Leer el contenido del diario
  leerDiario();
  
  // Agregar una nueva entrada al diario
  agregarEntrada("Esta es una nueva entrada en el diario.");
  
  // Editar una entrada específica del diario
  editarEntrada(
    "Mi primera entrada en el diario",
    "Mi primera entrada en el diario (editada)"
  );
  