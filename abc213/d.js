"use strict"

const add = (map, key, value) => {
  if (!map.has(key)) {
    map.set(key, [value]);
  } else {
    map.get(key).push(value);
  }
}

const my = (N, P) => {
  let paths = new Map();
  for (let [a, b] of P) {
    add(paths, a, b);
    add(paths, b, a);
  }
  for (let value of paths.values()) {
    value.sort((a, b) => a - b);
  }

  let result = [];
  let visited = new Set();
  let visit = (cur) => {
    visited.add(cur);
    result.push(cur);

    for (let next of paths.get(cur)) {
      if (visited.has(next)) continue;
      visit(next);
      result.push(cur);
    }
  }
  visit(1);
  return result;
}

const main = arg => {
  const lines = arg.trim().split("\n");

  const N = parseInt(lines[0].trim(), 10);
  const P = lines.slice(1, 1 + N - 1).map(
    it => it.trim().split(" ").map(it => parseInt(it, 10))
  );

  const result = my(N, P);
  console.log(result.join(" "));
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
