/****************************
 * Import files and modules *
 ****************************/

const http = require('http');

/**
 * Node.js is based on an EVENT-DRIVEN ARCHITECTURE. That means, most of the code is made of
 * responses to events that happen outside the server (for example, an HTTP request)
 */

/**=============================
 *   DEFINE REQUEST LISTENER
 =============================*/

const rqListener = (req, res) => {
  console.log(req.url, req.method, req.headers);

  res.setHeader('Content-Type', 'text/html'); // indica el tipus de document que enviarem.
  res.write(
    `<html>
      <head>
        <title>Look mom my first website with node js yaaaay</title>
      </head>
      <body>
        <h1>Look mom my first website with node.js yaaaay</h1>
      </body>
    </html>`
  ); // you can also call res.write() many times, for example, one for every line of HTML
  res.end() // finishes preparing the response and returns it to the server. 
  //process.exit(); // exits the event loop
};

/**=============================
 *     CREATE THE SERVER
 =============================*/

const server = http.createServer(rqListener); // this function takes a request listener as argument

/*==============================
 * MAKE THE SERVER LISTEN
 *=============================*/

// once the server is created, this function will keep the server running till it listens to the request.
// it takes as argument the name of the port (in this case, 3000)

server.listen(3000);
