/****************************
 * Import files and modules *
 ****************************/

const http = require('http');
const routes = require('./routes')

/**=============================
 *     CREATE THE SERVER
 =============================*/

const server = http.createServer(routes); // this function takes a request listener as argument

/*==============================
 *   MAKE THE SERVER LISTEN
 *=============================*/

// once the server is created, this function will keep the server running until it listens to the request.
// it takes as argument the name of the port (in this case, 3000)

server.listen(3000);
