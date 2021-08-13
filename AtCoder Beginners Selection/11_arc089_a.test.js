"use strict"

const path = require('path');
const targetFile = path.basename(__filename)
  .replace(/\.test\.js$/, ".js");
const main = require('./' + targetFile);

const cases = [[`\
2
3 1 2
6 1 1
`, `\
Yes
`], [`\
1
2 100 100
`, `\
No
`], [`\
2
5 1 1
100 1 1
`, `\
No
`]];

test.each(cases)("test %#", (input, output) => {
  console.log = jest.fn();
  main(input);
  expect(console.log.mock.calls[0][0] + "\n").toBe(output);
});
