"use strict"

const my = (A, B, C, X) => {
  let count = 0;
  for (let i = 0; i <= A; i++) {
    for (let j = 0; j <= B; j++) {
      for (let k = 0; k <= C; k++) {
        if (500 * i + 100 * j + 50 * k === X) count++;
      }
    }
  }
  return count;
}

const main = arg => {
  const input = arg.trim().split("\n");

  const A = parseInt(input[0], 10);
  const B = parseInt(input[1], 10);
  const C = parseInt(input[2], 10);
  const X = parseInt(input[3], 10);

  const result = my(A, B, C, X);
  console.log(result);
}

if (process.env.__CFBundleIdentifier !== 'com.jetbrains.WebStorm') {
  main(require('fs').readFileSync('/dev/stdin', 'utf8'))
} else {
  module.exports = main;
}
