"use strict"

const my = (N, a) => {
  let prevT = 0;
  let prevX = 0;
  let prevY = 0;
  for (let [t, x, y] of a) {
    let dt = t - prevT;
    let dx = Math.abs(x - prevX)
    let dy = Math.abs(y - prevY)
    let d = dx + dy;

    if (dt < d) return false;
    if (dt % 2 !== d % 2) return false;

    prevT = t;
    prevX = x;
    prevY = y;
  }
  return true;
}

const main = arg => {
  const lines = arg.trim().split("\n");

  const N = parseInt(lines[0], 10);
  const a = lines.slice(1, 1 + N)
    .map(line => line.split(" ").map(it => parseInt(it, 10)));

  const result = my(N, a);
  console.log(result ? "Yes" : "No");
}

if (process.env.__CFBundleIdentifier !== 'com.jetbrains.WebStorm') {
  main(require('fs').readFileSync('/dev/stdin', 'utf8'))
} else {
  module.exports = main;
}
