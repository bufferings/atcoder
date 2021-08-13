"use strict"

const my = (N, nums) => {
  nums.sort((a, b) => b - a);
  let sum1 = nums.filter((a, i) => i % 2 === 0).reduce((a, c) => a + c);
  let sum2 = nums.filter((a, i) => i % 2 === 1).reduce((a, c) => a + c);
  return sum1 - sum2;
}

const main = arg => {
  const lines = arg.trim().split("\n");

  const N = parseInt(lines[0], 10);
  const nums = lines[1].split(' ').map(it => parseInt(it, 10));

  const result = my(N, nums);
  console.log(result);
}

if (process.env.__CFBundleIdentifier !== 'com.jetbrains.WebStorm') {
  main(require('fs').readFileSync('/dev/stdin', 'utf8'))
} else {
  module.exports = main;
}
