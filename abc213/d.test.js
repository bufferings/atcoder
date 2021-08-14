"use strict"

const path = require('path');
const targetFile = path.basename(__filename)
  .replace(/\.test\.js$/, ".js");
const main = require('./' + targetFile);

const cases = [[`\
4
1 2
4 2
3 1
`, `\
1 2 4 2 1 3 1
`], [`\
5
1 2
1 3
1 4
1 5
`, `\
1 2 1 3 1 4 1 5 1
`]];

test.each(cases)("test %#", (input, output) => {
  console.log = jest.fn();
  main(input);
  expect(console.log.mock.calls[0][0] + "\n").toBe(output);
});
