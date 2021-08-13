"use strict"

const my = (N, Y) => {
  for (let x = N; x >= 0; x--) {
    for (let y = N - x; y >= 0; y--) {
      let z = N - x - y;
      if (10000 * x + 5000 * y + 1000 * z === Y) return [x, y, z].join(" ");
    }
  }
  return [-1, -1, -1].join(" ");
}

const main = arg => {
  const lines = arg.trim().split("\n");
  const items = lines[0].split(' ');
  const N = parseInt(items[0], 10);
  const Y = parseInt(items[1], 10);
  const result = my(N, Y);
  console.log(result);
}

if (process.env.__CFBundleIdentifier !== 'com.jetbrains.WebStorm') {
  main(require('fs').readFileSync('/dev/stdin', 'utf8'))
} else {
  module.exports = main;
}
