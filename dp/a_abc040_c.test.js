"use strict"

const path = require('path');
const targetFile = path.basename(__filename)
  .replace(/\.test\.js$/, ".js");
const main = require('./' + targetFile);

const cases = [
  ["4\n100 150 130 120\n", "40\n"],
  ["4\n100 125 80 110\n", "40\n"],
  ["9\n314 159 265 358 979 323 846 264 338\n", "310\n"],
];

test.each(cases)("test %#", (input, output) => {
  console.log = jest.fn();
  main(input);
  expect(console.log.mock.calls[0][0] + "\n").toBe(output);
});
