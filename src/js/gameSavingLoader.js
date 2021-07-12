import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static async load() {
    const response = await read();
    const value = await json(response);
    return JSON.parse(value);
  }
}
