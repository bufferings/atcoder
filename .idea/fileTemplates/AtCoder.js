"use strict"

// utils
const parseLines = arg => arg.trim().split("\n");
const parseNums = line => line.trim().split(" ").map(it => parseInt(it, 10));

// my
const my = () => {
  return 0;
}

// main
const main = arg => {
  const lines = parseLines(arg);

  const result = my();
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
