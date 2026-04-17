require('dotenv').config();

const server = require('./server');

const db = require('./database/models');

const PORT = process.env.PORT || 8080;

db.sequelize.authenticate()
  .then(() => console.log("DB conectada"))
  .then(() => db.sequelize.sync({ alter: true }))
  .catch(err => console.log(err));

server.listen(PORT, () => console.log(`Server is live al localhost:${PORT}`));
