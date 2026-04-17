require('dotenv').config();

const server = require('./server');

const db = require('./database/models');

const PORT = process.env.PORT || 8080;

db.sequelize.sync({ alter: true });

server.listen(PORT, () => console.log(`Server is live al localhost:${PORT}`));
