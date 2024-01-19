import { taskFirst, getLast, taskNext } from './task'; // Adjust the path to the actual location of your functions.

test('taskFirst returns the correct string', () => {
  expect(taskFirst()).toBe('I prefer const when I can.');
});

test('getLast returns the correct string', () => {
  expect(getLast()).toBe(' is okay');
});

test('taskNext returns the correct combination', () => {
  expect(taskNext()).toBe('But sometimes let is okay');
});
