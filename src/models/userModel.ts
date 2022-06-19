import { IUSER } from '../interfaces';
import { uuidv4 } from '../utilits';

export let users: IUSER[] = [];

export const findAll = () => {
  return new Promise<IUSER[]>(
    (resolve, reject) => {
      resolve(users);
    }
  );
};

export const findUserById = (id: string) => {
  return new Promise<IUSER>((resolve, reject) => {
    let user = users.find((el) => el.id === id);
    resolve(user);
  });
};

export const create = (user: IUSER) => {
  return new Promise<IUSER>((resolve, reject) => {
    const newUser = { id: uuidv4(), ...user };
    users.push(newUser);
    resolve(newUser);
  });
};

export const update = (
  id: string,
  user: IUSER
) => {
  return new Promise<IUSER>((resolve, reject) => {
    const index = users.findIndex((el) => {
      el.id === id;
      users[index] = { id, ...user };
    });
    resolve(users[index]);
  });
};
