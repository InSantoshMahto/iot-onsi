const path = require('path');
const fs = require('fs');

module.exports = {
  // port
  port: 6200,

  // secure socket layer
  ssl: {
    key: fs.readFileSync(path.join(__dirname, '../', 'ssl/key.pem')),
    cert: fs.readFileSync(path.join(__dirname, '../', 'ssl/cert.pem')),
  },

  // db
  // mongoURI: 'mongodb://127.0.0.1/auth_local',

  // body parser for MIME type
  bodyParser: {
    enableTypes: ['json', 'form', 'text'],
  },

  // static
  static: { hidden: true },

  // email
  email: {
    userId: 'noreply@onsi.in',
    password: 'Noreply@12345',
  },
};
