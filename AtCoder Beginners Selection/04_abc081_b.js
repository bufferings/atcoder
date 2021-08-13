"use strict"

const my = (N, A) => {
  let val = A.reduce((a, it) => a | it);

  let count = 0;
  while ((val & 1) === 0) {
    count++;
    val >>= 1;
  }
  return count;
}

const main = arg => {
  const input = arg.trim().split("\n");

  const N = parseInt(input[0], 10);
  const A = input[1].split(" ").map(it => parseInt(it, 10));

  const result = my(N, A);
  console.log(result);
}

if (process.env.__CFBundleIdentifier !== 'com.jetbrains.WebStorm') {
  main(require('fs').readFileSync('/dev/stdin', 'utf8'))
} else {
  module.exports = main;
}
