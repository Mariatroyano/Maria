const express = require("express");
const bodyParser = require("body-parser");
const { Sequelize, DataTypes } = require("sequelize");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const sequelize = new Sequelize("prueba", "maria", "12345678", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

// Definir el modelo de datos para 'User'
const User = sequelize.define(
  "User",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: false,
    tableName: "users", // Nombre personalizado para la tabla
  }
);

// Sincronizar el modelo con la base de datos (crear la tabla si no existe)
sequelize
  .sync()
  .then(() => console.log("Conectado a la base de datos y sincronizado."))
  .catch((err) => console.error("Error al conectar a la base de datos:", err));
// Rutas CRUD
// Obtener todos los usuarios
app.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Crear un nuevo usuario
app.post("/users", async (req, res) => {
  const { name, email } = req.body;
  try {
    const newUser = await User.create({ name, email });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
// Actualizar un usuario
// app.put("/users/:id", async (req, res) => {
//   const { id } = req.params;
//   const { name, email } = req.body;
//   try {
//     const user = await User.findByPk(id);
//     if (user) {
//       user.name = name;
//       user.email = email;
//       await user.save();
//       res.json(user);
//     } else {
//       res.status(404).json({ error: "Usuario no encontrado" });
//     }
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// // Eliminar un usuario
// app.delete("/users/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     const user = await User.findByPk(id);
//     if (user) {
//       await user.destroy();
//       res.json({ message: "Usuario eliminado" });
//     } else {
//       res.status(404).json({ error: "Usuario no encontrado" });
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });
// Iniciar el servidor en el puerto 3000



// Definir el modelo de datos para 'cliente'
const cliente = sequelize.define(
  "cliente",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    age: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: false,
    tableName: "cliente", // Nombre personalizado para la tabla
  }
);


// Rutas CRUD
// Obtener todos los usuarios
app.get("/cliente", async (req, res) => {
  try {
    const clientes = await cliente.findAll();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Crear un nuevo usuario
app.post("/cliente", async (req, res) => {
  const { name, lastname, Age, email, Phone, address } = req.body;
  try {
    const newCliente = await cliente.create({
      name,
      lastname,
      Age,
      email,
      Phone,
      address,
    });
    res.status(201).json(newCliente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
//Actualizar un usuario
app.put("/cliente/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  try {
    const user = await cliente.findByPk(id);
    if (user) {
      user.name = name;
      user.lastname = lastname;
      user.Age = Age;
      user.email = email;
      user.Phone = Phone;
      user.address = address;
      await user.save();
      res.json(user);
    } else {
      res.status(404).json({ error: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// // Eliminar un usuario
// app.delete("/clientes/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     const user = await cliente.findByPk(id);
//     if (user) {
//       await user.destroy();
//       res.json({ message: "Usuario eliminado" });
//     } else {
//       res.status(404).json({ error: "Usuario no encontrado" });
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });
// Iniciar el servidor en el puerto 3000
app.listen(9800, () => {
  console.log("Servidor ejecutándose en http://localhost:9800");
});
