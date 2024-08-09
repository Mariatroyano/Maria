const express = require("express");
const bodyParser = require("body-parser");
const { Sequelize, DataTypes } = require("sequelize");
const app = express();
const port = 7583;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const sequelize = new Sequelize("prueba", "maria", "12345678", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

sequelize
  .sync()
  .then(() => console.log("Conectado a la base de datos y sincronizado."))
  .catch((err) => console.error("Error al conectar a la base de datos:", err));

const Cliente = sequelize.define(
  "cliente",
  {
    name: {
      type: DataTypes.STRING,
    },
    lastname: {
      type: DataTypes.STRING,
    },
    Age: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    Phone: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    tableName: "clientes", // Nombre personalizado para la tabla
  }
);

// Obtener todos los clientes
app.get("/clientes", async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Crear un nuevo cliente
app.post("/clientes", async (req, res) => {
  const { name, lastname, Age, email, Phone, address } = req.body;
  try {
    const newCliente = await Cliente.create({
      name,
      lastname,
      Age,
      email,
      Phone,
      address,
    });
    res.status(201).json(newCliente);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

// Actualizar un cliente existente
app.put("/clientes/:id", async (req, res) => {
  const { id } = req.params;
  const { name, lastname, Age, email, Phone, address } = req.body;
  try {
    const cliente = await Cliente.findByPk(id);
    if (cliente) {
      cliente.name = name;
      cliente.lastname = lastname;
      cliente.Age = Age;
      cliente.email = email;
      cliente.Phone = Phone;
      cliente.address = address;
      await cliente.save();
      res.json(cliente);
    } else {
      res.status(404).json({ error: "Cliente no encontrado" });
    }
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
