/* eslint-disable no-console */
import GameSavingLoader from './gameSavingLoader';

(async () => {
  try {
    console.log(await GameSavingLoader.load());
  } catch (error) {
    console.error(error);
  }
})();
