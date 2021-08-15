// ==UserScript==
// @name         AtCoder MyJest Cases to Clipboard
// @namespace    https://github.com/bufferings/atcoder
// @version      0.1
// @description  Copy test cases from AtCoder to clipboard
// @author       Mitsuyuki Shiiba
// @match        https://atcoder.jp/*
// @grant        GM_setClipboard
// @downloadURL  https://raw.githubusercontent.com/bufferings/atcoder/tools/atcoder-ut.user.js
// ==/UserScript==

(function () {
  'use strict';

  function generateCases() {
    let i = 0;
    let cases = [];
    while (true) {
      let elemInput = document.getElementById(`pre-sample${i++}`);
      let elemOutput = document.getElementById(`pre-sample${i++}`);
      if (elemInput == null || elemOutput == null) break;
      cases.push([elemInput.innerText, elemOutput.innerText]);
    }
    // ja & en exist
    cases = cases.slice(0, cases.length / 2);

    let result = "const cases = [\n";
    for (let item of cases) {
      result += `  ["${item[0]}", "${item[1]}"],`.replace(/\n/g, "\\n") + "\n";
    }
    result += "];\n"

    return result;
  }

  function onKeydown(evt) {
    // Use https://keycode.info/ to get keys
    if (evt.metaKey && evt.shiftKey && evt.keyCode === 67) {
      GM_setClipboard(generateCases());
      evt.preventDefault();
    }
  }

  document.addEventListener('keydown', onKeydown, true);
})();