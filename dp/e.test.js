"use strict"

const path = require('path');
const targetFile = path.basename(__filename)
  .replace(/\.test\.js$/, ".js");
const main = require('./' + targetFile);

const cases = [
  ["3 8\n3 30\n4 50\n5 60\n", "90\n"],
  ["1 1000000000\n1000000000 10\n", "10\n"],
  ["6 15\n6 5\n5 6\n6 4\n6 6\n3 5\n7 2\n", "17\n"],
];

test.each(cases)("test %#", (input, output) => {
  console.log = jest.fn();
  main(input);
  expect(console.log.mock.calls[0][0] + "\n").toBe(output);
});
