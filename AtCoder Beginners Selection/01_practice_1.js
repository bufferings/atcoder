"use strict"

const my = (a, b, c, S) => {
  return `${a + b + c} ${S}`;
}

const main = arg => {
  const lines = arg.trim().split("\n");

  const a = parseInt(lines[0], 10);
  const [b, c] = lines[1].split(' ').map(it => parseInt(it, 10));
  const S = lines[2];

  const result = my(a, b, c, S);
  console.log(result);
}

if (process.env.__CFBundleIdentifier !== 'com.jetbrains.WebStorm') {
  main(require('fs').readFileSync('/dev/stdin', 'utf8'))
} else {
  module.exports = main;
}
