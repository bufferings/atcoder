"use strict"

const my = (a, b) => {
  return ((a & 1) !== 1) || ((b & 1) !== 1) ? "Even" : "Odd";
}

const main = arg => {
  const lines = arg.trim().split("\n");

  const [a, b] = lines[0].split(' ').map(it => parseInt(it, 10));

  const result = my(a, b);
  console.log(result);
}

if (process.env.__CFBundleIdentifier !== 'com.jetbrains.WebStorm') {
  main(require('fs').readFileSync('/dev/stdin', 'utf8'))
} else {
  module.exports = main;
}
