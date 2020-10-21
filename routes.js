/****************************
 * Import files and modules *
 ****************************/

const fs = require('fs');

/**
 * Node.js is based on an EVENT-DRIVEN ARCHITECTURE. That means, most of the code is made of
 * responses to events that happen outside the server (for example, an HTTP request)
 */

/*=========================================*
 *   DEFINE REQUEST LISTENER AND HANDLER   *
 *=========================================*/

const requestHandler = (req, res) => {
  const {url, method} = req;
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html'); // indica el tipus de document que enviarem.
    res.write(
      `<html>
        <head>
          <title>Look mom my first website with node js yaaaay</title>
        </head>
        <body>
          <h1>Look mom my first website with node.js yaaaay</h1>
          <form action="/message" method="POST" >
            <input type="text" name="message">
            <button>Send</button>
          </form>
        </body>
      </html>`
    ); // you can also call res.write() many times, for example, one for every line of HTML
    return res.end();
  }

  if (url === '/message' && method === 'POST') {
    /* Takes the post request created in the form and writes it into a new file */
    const body = [];
    req.on('data', (chunk) => {
      // on() is an event listener that responds to the data
      console.log(chunk);
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split('=')[1];
      fs.writeFile('message.txt', message, (err) => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }

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
  res.end(); // finishes preparing the response and returns it to the server.
  //process.exit(); // exits the event loop
};

/*********************
 * EXPORT THE MODULE *
 *********************/

module.exports = requestHandler;
