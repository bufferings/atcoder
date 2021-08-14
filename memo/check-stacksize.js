"use strict"

const main = () => {
  let c = 1;
  try {
    const rec = () => {
      c++;
      rec()
    };
    rec();
  } catch (error) {
    console.log(c);
  }
}

console.log(process.argv);
console.log(process.execArgv);

main();

