require('dotenv').config();

const server = require('./server');
const db = require('./database/models');

const PORT = process.env.PORT || 8080;

db.sequelize.authenticate()
  .then(() => {
    console.log("DB conectada correctamente");
    return db.sequelize.sync({ alter: true });
  })
  .then(() => console.log("Tablas sincronizadas"))
  .catch(err => console.error("Error de conexión:", err));

server.listen(PORT, () =>
  console.log(`Server is live at localhost:${PORT}`)
);
