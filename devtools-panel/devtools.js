/* See license.txt for terms of usage */

var verbose = false;

// Create new DevTools panel.
chrome.devtools.panels.create(
  "My Panel",
  "about/icon.png",
  "panel.html",
  initialize
);

function initialize(panel) {
  panel.onShown.addListener(function (win) {
    // TODO
  });
}
