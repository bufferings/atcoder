"use strict"

// utils
const parseLines = arg => arg.trim().split("\n");
const parseNum = line => parseInt(line.trim(), 10);
const parseNums = line => line.trim().split(" ").map(it => parseInt(it, 10));

// my
const my = (N) => {
  const dp = new Array(N + 1).fill(Number.MAX_VALUE);

  dp[0] = 0;
  for (let i = 0; i < N; i++) {
    // 1
    dp[i + 1] = Math.min(dp[i + 1], dp[i] + 1);

    // 6
    let j = 1;
    while (i + 6 ** j <= N) {
      dp[i + 6 ** j] = Math.min(dp[i + 6 ** j], dp[i] + 1);
      j++;
    }

    // 9
    let k = 1;
    while (i + 9 ** k <= N) {
      dp[i + 9 ** k] = Math.min(dp[i + 9 ** k], dp[i] + 1);
      k++;
    }
  }

  return dp[N];
}

// main
const main = arg => {
  const lines = parseLines(arg);
  const [N] = parseNums(lines[0]);

  const result = my(N);
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
