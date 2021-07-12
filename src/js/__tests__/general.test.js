/* eslint-disable no-undef */
import GameSavingLoader from '../gameSavingLoader';
import read from '../reader';

// test('should work with promise and async/await', async () => {
//   const data = await GameSavingLoader.load();
//   expect(data).toEqual({
//     id: 9,
//     created: 1546300800,
//     userInfo: {
//       id: 1, name: 'Hitman', level: 10, points: 2000,
//     },
//   });
// });

const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
const buffer = new ArrayBuffer(data.length * 2);
const bufferView = new Uint16Array(buffer);
// eslint-disable-next-line no-plusplus
for (let i = 0; i < data.length; i++) {
  bufferView[i] = data.charCodeAt(i);
}
const expectation = {
  id: 9,
  created: 1546300800,
  userInfo: {
    id: 1, name: 'Hitman', level: 10, points: 2000,
  },
};

jest.mock('../reader');

test('should resolve "read" function', async () => {
  read.mockReturnValue(buffer);
  await expect(GameSavingLoader.load()).resolves.toEqual(expectation);
});

test('should reject "read" function', async () => {
//   expect.assertions(1);
  read.mockReturnValue(buffer);
  await expect(GameSavingLoader.load()).rejects.toMatch('error');
});
