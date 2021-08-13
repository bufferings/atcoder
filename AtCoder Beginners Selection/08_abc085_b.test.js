"use strict"

const path = require('path');
const targetFile = path.basename(__filename)
  .replace(/\.test\.js$/, ".js");
const main = require('./' + targetFile);

const cases = [[`\
4
10
8
8
6
`, `\
3
`], [`\
3
15
15
15
`, `\
1
`], [`\
7
50
30
50
100
50
80
30
`, `\
4
`]];

test.each(cases)("test %#", (input, output) => {
  console.log = jest.fn();
  main(input);
  expect(console.log.mock.calls[0][0] + "\n").toBe(output);
});
