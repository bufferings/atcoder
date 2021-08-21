"use strict"

// utils
const parseLines = arg => arg.trim().split("\n");
const parseNum = line => parseInt(line.trim(), 10);
const parseNums = line => line.trim().split(" ").map(it => parseInt(it, 10));

// my
const my = (N, W, p) => {
  const maxV = p.reduce((sum, [, v]) => sum + v, 0);
  const dp = new Array(N + 1).fill(null).map(() => new Array(maxV + 1).fill(Number.MAX_VALUE));

  dp[0][0] = 0;
  for (let i = 0; i < N; i++) {
    const [w, v] = p[i];
    for (let j = 0; j <= maxV; j++) {
      dp[i + 1][j] = Math.min(dp[i + 1][j], dp[i][j]);
      if (j - v >= 0) {
        dp[i + 1][j] = Math.min(dp[i + 1][j], dp[i][j - v] + w);
      }
    }
  }

  for (let i = maxV + 1; i >= 0; i--) {
    if (dp[N][i] <= W) return i;
  }
  return null;
}

// main
const main = arg => {
  const lines = parseLines(arg);
  const [N, W] = parseNums(lines[0]);
  const p = lines.slice(1).map(parseNums);

  const result = my(N, W, p);
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
