"use strict"

const my = (N, S, T) => {
  let A = [];

  let minT = T[0];
  let minTIndex = 0;
  for (let i = 0; i < N; i++) {
    if (T[i] < minT) {
      minT = T[i];
      minTIndex = i;
    }
  }

  A[minTIndex] = T[minTIndex];
  for (let i = minTIndex + 1; i < N; i++) {
    A[i] = Math.min(A[i - 1] + S[i - 1], T[i]);
  }

  if (minTIndex === 0) return A;

  A[0] = Math.min(A[N - 1] + S[N - 1], T[0]);
  for (let i = 1; i < minTIndex; i++) {
    A[i] = Math.min(A[i - 1] + S[i - 1], T[i]);
  }

  return A;
}

const main = arg => {
  const lines = arg.trim().split("\n");

  const N = parseInt(lines[0].trim(), 10);
  const S = lines[1].trim().split(" ").map(it => parseInt(it, 10));
  const T = lines[2].trim().split(" ").map(it => parseInt(it, 10));

  const result = my(N, S, T);
  console.log(result.join("\n"));
}

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
