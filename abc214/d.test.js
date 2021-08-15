"use strict"

const path = require('path');
const targetFile = path.basename(__filename)
  .replace(/\.test\.js$/, ".js");
const main = require('./' + targetFile);

const cases = [[`\
3
1 2 10
2 3 20
`, `\
50
`], [`\
5
1 2 1
2 3 2
4 2 5
3 5 14
`, `\
76
`]];

test.each(cases)("test %#", (input, output) => {
  console.log = jest.fn();
  main(input);
  expect(console.log.mock.calls[0][0] + "\n").toBe(output);
});
