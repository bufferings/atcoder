"use strict"

// utils
const parseLines = arg => arg.trim().split("\n");
const parseNum = line => parseInt(line.trim(), 10);
const parseNums = line => line.trim().split(" ").map(it => parseInt(it, 10));

// my
const my = (N, M, a) => {
  let dp = new Array(N + 1).fill(0);
  dp[0] = 1;
  let curA = 0;
  for (let i = 1; i <= N; i++) {
    if (a[curA] === i) {
      dp[i] = 0;
      curA++;
      continue;
    }

    if (i >= 2) {
      dp[i] = (dp[i - 1] + dp[i - 2]) % 1_000_000_007;
    } else {
      dp[i] = dp[i - 1];
    }
  }
  return dp[N];
}

// main
const main = arg => {
  const lines = parseLines(arg);
  const [N, M] = parseNums(lines[0]);
  const a = lines.slice(1).map(parseNum);

  const result = my(N, M, a);
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
