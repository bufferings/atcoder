"use strict"

const my = (N, A) => {

  let max1 = Number.MIN_VALUE;
  let max2 = Number.MIN_VALUE;

  let idx1 = -1;
  let idx2 = -1;
  for (let i = 0; i < N; i++) {
    if (A[i] > max1) {
      max2 = max1;
      idx2 = idx1;

      max1 = A[i];
      idx1 = i;
    } else if (A[i] > max2) {
      max2 = A[i];
      idx2 = i;
    }
  }

  return idx2 + 1;
}

const main = arg => {
  const lines = arg.trim().split("\n");

  const N = parseInt(lines[0], 10);
  const A = lines[1].split(" ").map(it => parseInt(it, 10));

  const result = my(N, A);
  console.log(result);
}

if (process.env.__CFBundleIdentifier !== 'com.jetbrains.WebStorm') {
  main(require('fs').readFileSync('/dev/stdin', 'utf8'))
} else {
  module.exports = main;
}
