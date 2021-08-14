"use strict"

const my = (A, B) => {
  return A ^ B;
}

const main = arg => {
  const lines = arg.trim().split("\n");

  const [A, B] = lines[0].split(' ').map(it => parseInt(it, 10));

  const result = my(A, B);
  console.log(result);
}

if (process.env.__CFBundleIdentifier !== 'com.jetbrains.WebStorm') {
  main(require('fs').readFileSync('/dev/stdin', 'utf8'))
} else {
  module.exports = main;
}
