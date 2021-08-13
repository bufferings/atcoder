"use strict"

const path = require('path');
const targetFile = path.basename(__filename)
  .replace(/\.test\.js$/, ".js");
const main = require('./' + targetFile);

const cases = [[`\
9 45000
`, `\
4 0 5
`], [`\
20 196000
`, `\
-1 -1 -1
`], [`\
1000 1234000
`, `\
26 0 974
`], [`\
2000 20000000
`, `\
2000 0 0
`]];

test.each(cases)("test %#", (input, output) => {
  console.log = jest.fn();
  main(input);
  expect(console.log.mock.calls[0][0] + "\n").toBe(output);
});
