//para importar en nodejs --> var x = require('nombre del modulo');
var http = require('http');

// Funcion encargada de manejar las request que lleguen al server por el puerto 8000
function requestHandler(request, response){
	// Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});

   // Send the response body as "Hello World"
   response.end('<h1>Hello World</h1>');
}

// Crea el server y escucha en puerto 8000
http.createServer(requestHandler).listen(8000);

// Console will print the message
console.log('Server running at http://localhost:8000/');