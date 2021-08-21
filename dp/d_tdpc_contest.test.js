"use strict"

const path = require('path');
const targetFile = path.basename(__filename)
  .replace(/\.test\.js$/, ".js");
const main = require('./' + targetFile);

const cases = [
  ["3\n2 3 5\n", "7\n"],
  ["10\n1 1 1 1 1 1 1 1 1 1\n", "11\n"],
];

test.each(cases)("test %#", (input, output) => {
  console.log = jest.fn();
  main(input);
  expect(console.log.mock.calls[0][0] + "\n").toBe(output);
});
