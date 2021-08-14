"use strict"

const my = (H, W, N, P) => {
  P = P.map((it, idx) => [idx + 1, ...it]);

  P.sort((a, b) => a[1] - b[1]);
  let xm = P.reduce((a, it) => {
    if (!a.has(it[1])) {
      a.set(it[1], [it[0]]);
    } else {
      a.get(it[1]).push(it[0]);
    }
    return a;
  }, new Map());

  P.sort((a, b) => a[2] - b[2]);
  let ym = P.reduce((a, it) => {
    if (!a.has(it[2])) {
      a.set(it[2], [it[0]]);
    } else {
      a.get(it[2]).push(it[0]);
    }
    return a;
  }, new Map());

  let xm2 = [...xm.values()].reduce((a, it, idx) => {
    for (let val of it) {
      a.set(val, idx + 1);
    }
    return a;
  }, new Map());

  let ym2 = [...ym.values()].reduce((a, it, idx) => {
    for (let val of it) {
      a.set(val, idx + 1);
    }
    return a;
  }, new Map());

  let result = [];
  for (let i = 1; i <= N; i++) {
    result.push([xm2.get(i), ym2.get(i)]);
  }

  return result;
}

const main = arg => {
  const lines = arg.trim().split("\n");

  const [H, W, N] = lines[0].split(' ').map(it => parseInt(it, 10));
  const P = lines.slice(1, 1 + N).map(it => it.split(' ').map(it => parseInt(it, 10)));

  const result = my(H, W, N, P);
  console.log(result.map(it => it.join(" ")).join("\n"));
}

if (process.env.__CFBundleIdentifier !== 'com.jetbrains.WebStorm') {
  main(require('fs').readFileSync('/dev/stdin', 'utf8'))
} else {
  module.exports = main;
}
