"use strict"

// utils
const parseLines = arg => arg.trim().split("\n");
const parseNums = line => line.trim().split(" ").map(it => parseInt(it, 10));

// my
const my = (N, a) => {
  let dp = new Array(N).fill(Number.MAX_VALUE);

  dp[0] = 0;
  for (let i = 0; i < N - 1; i++) {
    dp[i + 1] = Math.min(dp[i + 1], dp[i] + Math.abs(a[i] - a[i + 1]));
    dp[i + 2] = Math.min(dp[i + 2], dp[i] + Math.abs(a[i] - a[i + 2]));
  }

  return dp[N - 1];
}

// main
const main = arg => {
  const lines = parseLines(arg);
  const [N] = parseNums(lines[0]);
  const a = parseNums(lines[1]);

  const result = my(N, a);
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
