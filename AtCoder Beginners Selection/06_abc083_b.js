"use strict"

const my = (N, A, B) => {
  let sum = 0;
  for (let i = 1; i <= N; i++) {
    let val = i.toString()
      .split('')
      .reduce((a, c) => a + parseInt(c, 10), 0);
    if (val >= A && val <= B) {
      sum += i;
    }
  }
  return sum;
}

const main = arg => {
  const lines = arg.trim().split("\n");

  const items = lines[0].split(' ');
  const N = parseInt(items[0], 10);
  const A = parseInt(items[1], 10);
  const B = parseInt(items[2], 10);

  const result = my(N, A, B);
  console.log(result);
}

if (process.env.__CFBundleIdentifier !== 'com.jetbrains.WebStorm') {
  main(require('fs').readFileSync('/dev/stdin', 'utf8'))
} else {
  module.exports = main;
}
