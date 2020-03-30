import { greet } from "../../lib/greeter.js";

test('greet shehab (as an example)', () => {
  expect(greet('Shehab')).toBe('Hello Shehab');
});

test('greet shehab (as an example), but in a diffrent way', () => {
  expect(greet('Shehab', 'Welcome back')).toBe('Welcome back Shehab');
});
