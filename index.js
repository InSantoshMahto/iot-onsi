const dotenv = require('dotenv').config(); // .env
const fastify = require('fastify')({ logger: true }); // Require the framework and instantiate it

const config = require('./config'); // configuration

const PORT = process.env.PORT || config.port; // defining port number

// for dotenv
if (dotenv.error) throw dotenv.error;
console.info(`key added in env by dotenv are:\n`, dotenv.parsed);

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' };
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen(PORT);
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
