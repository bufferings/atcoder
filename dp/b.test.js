"use strict"

const path = require('path');
const targetFile = path.basename(__filename)
  .replace(/\.test\.js$/, ".js");
const main = require('./' + targetFile);

const cases = [
  ["5 3\n10 30 40 50 20\n", "30\n"],
  ["3 1\n10 20 10\n", "20\n"],
  ["2 100\n10 10\n", "0\n"],
  ["10 4\n40 10 20 70 80 10 20 70 80 60\n", "40\n"],
];

test.each(cases)("test %#", (input, output) => {
  console.log = jest.fn();
  main(input);
  expect(console.log.mock.calls[0][0] + "\n").toBe(output);
});
