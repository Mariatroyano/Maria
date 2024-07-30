const express = require("express");
const app = express();
 const port = 3000;

const products = [
    { id: 1, name: 'iphone 15', price: 5000000,date:'Agosto' },
    { id: 2, name: 'Samsung', price:2000000,date:'Noviembre'  },
    { id: 3, name: 'Xiaomi', price: 500000,date:'Diciembre'  },
    { id: 4, name: 'appo', price: 700000,date:'Enero'  },
    { id: 5, name: 'Motorola', price: 500000,date:'Agosto'  },
    { id: 6, name: 'Huawey', price: 500000,date:'Agosto' },
  ];
const categoria = [
    { id: 1, name: 'Galaxy A',amount:2 },
    { id: 2, name: 'Galaxy M',amount:5  },
    { id: 3, name: 'Galaxy s23',amount:3 },
    { id: 4, name: 'Samsung Galaxy Z Flip5',amount:3 },
    { id: 5, name: 'Samsung Galaxy A03 Core',amount:3 },
    { id: 6, name: 'Samsung Galaxy A13',amount:3 },
  ];

const cliente = [
    { id: 1, name: 'Karina Rivera',phone:3245678997,correo:'karina23@mail.com',Dirreccion:'popayán'},
    { id: 2, name: 'Sebastian Quinayas',phone:323245678,correo:'sebastian45@mail.com',Dirreccion:'cali'},
    { id: 3, name: 'Nicol Camayo',phone:3235678978,correo:'tapasco2345@mail.com',Dirreccion:'popayán'},
    { id: 4, name: 'Andres Urrego',phone:3245678997,correo:'AndresUrrego23@mail.com',Dirreccion:'popayán'},
    { id: 5, name: 'Cristian Yalanda',phone:3104567896,correo:'cris2323@mail.com',Dirreccion:'popayán'},
    { id: 6, name: 'Maria Troyano',phone:3123456786,correo:'Maria2023@mail.com',Dirreccion:'popayán'}
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
  app.listen(port, () => {
    console.log(`Puerto Escuchado ${port}`);
});