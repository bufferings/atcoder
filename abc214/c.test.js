"use strict"

const path = require('path');
const targetFile = path.basename(__filename)
  .replace(/\.test\.js$/, ".js");
const main = require('./' + targetFile);

const cases = [[`\
3
4 1 5
3 10 100
`, `\
3
7
8
`], [`\
4
100 100 100 100
1 1 1 1
`, `\
1
1
1
1
`], [`\
4
1 2 3 4
1 2 4 7
`, `\
1
2
4
7
`], [`\
8
84 87 78 16 94 36 87 93
50 22 63 28 91 60 64 27
`, `\
50
22
63
28
44
60
64
27
`]];

test.each(cases)("test %#", (input, output) => {
  console.log = jest.fn();
  main(input);
  expect(console.log.mock.calls[0][0] + "\n").toBe(output);
});
