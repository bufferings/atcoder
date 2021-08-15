"use strict"

const my = (N, edges) => {
  let nodes = new Array(N + 1).fill(-1);
  let root = (i) => {
    if (nodes[i] < 0) return i;
    return root(nodes[i]);
  }
  let size = (i) => {
    return -nodes[root(i)];
  }
  let merge = (i, j) => {
    let ri = root(i);
    let rj = root(j);
    if (ri === rj) return;

    if (nodes[ri] < nodes[rj]) {
      nodes[ri] += nodes[rj];
      nodes[rj] = ri;
    } else {
      nodes[rj] += nodes[ri];
      nodes[ri] = rj;
    }
  }

  edges.sort((a, b) => a[2] - b[2]);

  let sum = 0n;
  for (let [u, v, w] of edges) {
    sum += BigInt(size(u)) * BigInt(size(v)) * BigInt(w);
    merge(u, v);
  }
  return String(sum);
}

const main = arg => {
  const lines = arg.trim().split("\n");

  const N = parseInt(lines[0].trim(), 10);

  const edges = []
  for (let i = 1; i <= N - 1; i++) {
    edges.push(lines[i].trim().split(" ").map(it => parseInt(it, 10)));
  }

  const result = my(N, edges);
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
