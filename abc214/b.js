"use strict"

const my = (S, T) => {
  let count = 0;
  for (let a = 0; a <= S; a++) {
    for (let b = 0; b <= S - a; b++) {
      for (let c = 0; c <= S - a - b; c++) {
        if (a * b * c <= T) {
          count++;
        }
      }
    }
  }
  return count;
}

const main = arg => {
  const lines = arg.trim().split("\n");

  const [S, T] = lines[0].trim().split(" ").map(it => parseInt(it, 10));

  const result = my(S, T);
  console.log(result);
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
