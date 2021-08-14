"use strict"

const path = require('path');
const targetFile = path.basename(__filename)
  .replace(/\.test\.js$/, ".js");
const main = require('./' + targetFile);

const cases = [[`\
4 5 2
3 2
2 5
`, `\
2 1
1 2
`], [`\
1000000000 1000000000 10
1 1
10 10
100 100
1000 1000
10000 10000
100000 100000
1000000 1000000
10000000 10000000
100000000 100000000
1000000000 1000000000
`, `\
1 1
2 2
3 3
4 4
5 5
6 6
7 7
8 8
9 9
10 10
`]];

test.each(cases)("test %#", (input, output) => {
  console.log = jest.fn();
  main(input);
  expect(console.log.mock.calls[0][0] + "\n").toBe(output);
});
