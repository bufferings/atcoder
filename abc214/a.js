"use strict"

const my = (N) => {
  if (N <= 125) return 4;
  if (N <= 211) return 6;
  return 8;
}

const main = arg => {
  const lines = arg.trim().split("\n");

  const N = parseInt(lines[0].trim(), 10);

  const result = my(N);
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
