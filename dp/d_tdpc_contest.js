"use strict"

// utils
const parseLines = arg => arg.trim().split("\n");
const parseNum = line => parseInt(line.trim(), 10);
const parseNums = line => line.trim().split(" ").map(it => parseInt(it, 10));

// my
const my = (N, p) => {
  let sum = new Set();
  sum.add(0);
  for (let i = 1; i <= N; i++) {
    let copy = new Set(sum);
    for (const el of copy) {
      sum.add(el + p[i - 1]);
    }
  }
  return sum.size;
}

// main
const main = arg => {
  const lines = parseLines(arg);
  const N = parseNum(lines[0]);
  const p = parseNums(lines[1]);

  const result = my(N, p);
  console.log(result);
}

// entry point
if (process.env.__CFBundleIdentifier !== 'com.jetbrains.WebStorm') {
  if (process.argv.length < 3 || process.argv[2] !== "1") {
    require("child_process").fork(
      __filename, ["1"], { execArgv: ["--stack-size=100000"] });
  } else {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
  }
} else {
  module.exports = main;
}
