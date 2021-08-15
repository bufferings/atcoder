"use strict"

const path = require('path');
const targetFile = path.basename(__filename)
  .replace(/\.test\.js$/, ".js");
const main = require('./' + targetFile);

const cases = [[`\
1 0
`, `\
4
`], [`\
2 5
`, `\
10
`], [`\
10 10
`, `\
213
`], [`\
30 100
`, `\
2471
`]];

test.each(cases)("test %#", (input, output) => {
  console.log = jest.fn();
  main(input);
  expect(console.log.mock.calls[0][0] + "\n").toBe(output);
});
