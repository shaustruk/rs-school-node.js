import {
  createUser,
  getUser,
  getUsers,
  updateUser,
} from './controller/userController';
import { http, messages } from './utilits';

const server = http.createServer((req, res) => {
  if (
    req.url === '/api/users' &&
    req.method === 'GET'
  ) {
    getUsers(req, res);
  } else if (
    req.url.match(/^\/api\/users\/[\w-]+$/) &&
    req.method === 'GET'
  ) {
    const id = req.url.split('/').pop();
    getUser(req, res, id);
  } else if (
    req.url === '/api/users' &&
    req.method === 'POST'
  ) {
    createUser(req, res);
  } else if (
    req.url.match(/^\/api\/users\/[\w-]+$/) &&
    req.method === 'PUT'
  ) {
    const id = req.url.split('/').pop();
    updateUser(req, res, id);
  } else {
    res.writeHead(404, {
      'Content-type': 'application/json',
    });
    res.end(
      JSON.stringify({
        Warning: messages.errorRoute,
      })
    ); //end the response
  }
});
const port = process.env.port || 8000;
server.listen(port, () =>
  console.log(`Server running on port ${port}`)
); //the server object listens on port 8080
