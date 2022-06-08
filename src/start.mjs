import { closeApp } from './exit.mjs';
import { entrance, userName } from './enter.js';

export const args = process.argv;

entrance(args);
closeApp(userName);
