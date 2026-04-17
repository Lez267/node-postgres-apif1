require('dotenv').config();

const server = require('./server');
const db = require('./database/models');

const PORT = process.env.PORT || 8080;

db.sequelize.authenticate()
  .then(() => {
    console.log("DB conectada");

    return db.sequelize.sync({ alter: true });
  })
  .then(() => {
    console.log("Tablas creadas / sincronizadas");
  })
  .catch(err => {
    console.error("ERROR DB:", err);
  });

server.listen(PORT, () =>
  console.log(`Server is live al localhost:${PORT}`)
);
