import {
  ServerResponse,
  IncomingMessage,
} from 'http';
import { messages, uuidv4 } from '../utilits';
import { IUSER } from '../interfaces';
import {
  create,
  findAll,
  findUserById,
} from '../models/userModel';

export async function getUsers(
  req: IncomingMessage,
  res: ServerResponse
) {
  try {
    const users = await findAll();
    res.writeHead(200, {
      'Content-type': 'application/json',
    }); //write a response to the client
    res.end(JSON.stringify(users)); //end the response
  } catch (error) {
    console.log(error);
  }
}

export async function getUser(
  req: IncomingMessage,
  res: ServerResponse,
  id: string
) {
  try {
    const user = await findUserById(id);
    if (!user) {
      res.writeHead(404, {
        'Content-type': 'application/json',
      }); //write a response to the client
      res.end(
        JSON.stringify({
          warning: messages.noExistId,
        })
      ); //end the response
    } else {
      res.writeHead(200, {
        'Content-type': 'application/json',
      }); //write a response to the client
      res.end(JSON.stringify(user)); //end the response
    }
  } catch (error) {
    console.log(error);
  }
}

export async function createUser(
  req: IncomingMessage,
  res: ServerResponse
) {
  try {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', async () => {
      const { username, hobbies, age } =
        JSON.parse(body);
      let user: IUSER = {
        username,
        age,
        hobbies,
      };
      const newUser = await create(user);
      console.log(
        'user was created',
        'id',
        user.id
      );
      res.writeHead(201, {
        'Content-type': 'application/json',
      });
      return res.end(JSON.stringify(newUser)); //end the response
    });
  } catch (error) {
    console.log(error);
  }
}
