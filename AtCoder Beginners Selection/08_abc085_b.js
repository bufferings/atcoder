"use strict"

const my = (N, d) => {
  return new Set(d).size;
}

const main = arg => {
  const lines = arg.trim().split("\n");

  const N = parseInt(lines[0], 10);
  const d = lines.slice(1, N + 1).map(it => parseInt(it, 10));

  const result = my(N, d);
  console.log(result);
}

if (process.env.__CFBundleIdentifier !== 'com.jetbrains.WebStorm') {
  main(require('fs').readFileSync('/dev/stdin', 'utf8'))
} else {
  module.exports = main;
}
