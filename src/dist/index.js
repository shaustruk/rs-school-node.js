"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utilits_1 = require("./utilits");
var host = 'localhost';
var port = 8000;
utilits_1.http
    .createServer(function (req, res) {
    res.write('Hello World!'); //write a response to the client
    res.end(); //end the response
})
    .listen(port); //the server object listens on port 8080
//# sourceMappingURL=index.js.map