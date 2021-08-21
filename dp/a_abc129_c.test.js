"use strict"

const path = require('path');
const targetFile = path.basename(__filename)
  .replace(/\.test\.js$/, ".js");
const main = require('./' + targetFile);

const cases = [
  ["6 1\n3\n", "4\n"],
  ["10 2\n4\n5\n", "0\n"],
  ["100 5\n1\n23\n45\n67\n89\n", "608200469\n"],
];

test.each(cases)("test %#", (input, output) => {
  console.log = jest.fn();
  main(input);
  expect(console.log.mock.calls[0][0] + "\n").toBe(output);
});
