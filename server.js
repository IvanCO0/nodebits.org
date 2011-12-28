var Http = require('http'),
    Stack = require('stack'),
    Creationix = require('creationix'),
    Path = require('path');
    Nog = require('nog');

var port = process.env.PORT || 8080;

var blog = Nog(Path.join(__dirname));
Http.createServer(Stack(
  Creationix.log(),
  blog
)).listen(port);
console.log("Server listening at http://localhost:%s/", port);

blog.warehouse();
process.on("SIGUSR2", blog.warehouse);


