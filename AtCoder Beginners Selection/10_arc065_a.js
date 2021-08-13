"use strict"

const my = (S) => {
  let items = ["dream", "dreamer", "erase", "eraser"]
    .map(it => it.split('').reverse().join(''));
  let revS = S.split('').reverse().join('');

  let current = 0;
  let found = true;
  while (found) {
    found = false;
    for (let item of items) {
      if (revS.startsWith(item, current)) {
        current += item.length;
        if (current === revS.length) return true;
        found = true;
        break;
      }
    }
  }
  return false;
}

const main = arg => {
  const lines = arg.trim().split("\n");
  const S = lines[0];
  const result = my(S);
  console.log(result ? "YES" : "NO");
}

if (process.env.__CFBundleIdentifier !== 'com.jetbrains.WebStorm') {
  main(require('fs').readFileSync('/dev/stdin', 'utf8'))
} else {
  module.exports = main;
}
