import { http } from './utilits';

const host = 'localhost';
const port = 8000;
http
  .createServer((req, res) => {
    res.write('Hello World!'); //write a response to the client
    res.end(); //end the response
  })
  .listen(port); //the server object listens on port 8080
