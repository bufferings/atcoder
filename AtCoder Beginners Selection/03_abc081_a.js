"use strict"

const my = (S) => {
  return S.split('')
    .map(it => parseInt(it, 10))
    .reduce((a, it) => a + it);
}

const main = arg => {
  const lines = arg.trim().split("\n");

  const result = my(lines[0]);
  console.log(result);
}

if (process.env.__CFBundleIdentifier !== 'com.jetbrains.WebStorm') {
  main(require('fs').readFileSync('/dev/stdin', 'utf8'))
} else {
  module.exports = main;
}
