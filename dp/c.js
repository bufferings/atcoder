"use strict"

// utils
const parseLines = arg => arg.trim().split("\n");
const parseNums = line => line.trim().split(" ").map(it => parseInt(it, 10));

// my
const my = (N, h) => {
  let dp = new Array(N + 1).fill(null).map(() => [
    Number.MIN_VALUE, Number.MIN_VALUE, Number.MIN_VALUE
  ]);

  dp[0] = [0, 0, 0];
  for (let i = 0; i < N; i++) {
    dp[i + 1][0] = Math.max(dp[i][1], dp[i][2]) + h[i][0];
    dp[i + 1][1] = Math.max(dp[i][2], dp[i][0]) + h[i][1];
    dp[i + 1][2] = Math.max(dp[i][0], dp[i][1]) + h[i][2];
  }
  return Math.max(...dp[N]);
}

// main
const main = arg => {
  const lines = parseLines(arg);
  const [N] = parseNums(lines[0]);
  const h = lines.slice(1).map(it => parseNums(it));

  const result = my(N, h);
  console.log(result);
}

// entry point
if (process.env.__CFBundleIdentifier !== 'com.jetbrains.WebStorm') {
  if (process.argv.length < 3 || process.argv[2] !== "1") {
    require("child_process").fork(
      __filename, ["1"], {execArgv: ["--stack-size=100000"]});
  } else {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
  }
} else {
  module.exports = main;
}
