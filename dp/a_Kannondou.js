"use strict"

// utils
const parseLines = arg => arg.trim().split("\n");
const parseNum = line => parseInt(line.trim(), 10);
const parseNums = line => line.trim().split(" ").map(it => parseInt(it, 10));

// my
const my = (N) => {
  const M = 3650;
  let dp = new Array(N + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= N; i++) {
    dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
  }
  return Math.ceil(dp[N] / M);
}

// main
const main = arg => {
  const lines = parseLines(arg);
  const n = lines.map(parseNum);

  let result = [];
  for (let i of n) {
    if (i === 0) break;
    result.push(my(i));
  }
  console.log(result.join("\n"));
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
