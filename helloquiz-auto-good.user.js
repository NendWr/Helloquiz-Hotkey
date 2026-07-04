// ==UserScript==
// @name         Helloquiz Auto-Good Hotkey
// @namespace    https://github.com/NendWr
// @version      1.0
// @description  try to take over the world!
// @author       NendWr
// @match        https://helloquiz.app/quiz/erVfCvEjr9Y9?learn
// @icon         https://www.google.com/s2/favicons?sz=64&domain=helloquiz.app
// @grant        none
// ==/UserScript==

(function() {
    'use strict';


document.addEventListener('keydown', function(e) {
  // Ignore if you're typing in an input/textarea somewhere
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

  if (e.code === 'Space') {
    e.preventDefault(); // stop page from scrolling on spacebar
    const goodBtn = document.querySelector('button[title="3"]');
    if (goodBtn) {
      goodBtn.click();
    }
  }
});
})();