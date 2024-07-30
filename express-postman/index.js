const express = require("express");

const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 }
  ];
const categoria = [
    { id: 1, name: 'Amazon',amount:2 },
    { id: 2, name: 'H&Y',amount:5  },
    { id: 3, name: 'IKEY',amount:3 }
  ];

const cliente = [
    { id: 1, name: 'Karina River' },
    { id: 2, name: 'Sebastian Quinayas'},
    { id: 3, name: 'Nicol Ramos'}
  ];
  
  // Ruta para obtener todos los productos
  app.get('/products', (req, res) => {
    res.json(products);
  });

  // Ruta para obtener todos los productos
  app.get('/categoria', (req, res) => {
    res.json(categoria );
  });

  // Ruta para obtener todos los productos
  app.get('/cliente', (req, res) => {
    res.json(cliente);
  });
  
  // Ruta para obtener un producto por ID
  app.get('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id, 10);
    const product = products.find(p => p.id === productId);
  
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  });
  app.listen(port,() => {
    console.log(`servidor http://localhost:${port}`);
    
})