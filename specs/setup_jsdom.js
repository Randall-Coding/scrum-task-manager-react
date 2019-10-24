/* setup.js */
import $ from 'jquery';

const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body><div id="app"></div></body></html>');
const { window } = jsdom;

function copyProps(src, target) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  });
}

global.window = window;
global.document = window.document;

global.jQuery = $(window);

global.navigator = {
  userAgent: 'node.js',
};

global.requestAnimationFrame = function(callback) {
  return setTimeout(callback, 0);
};
global.cancelAnimationFrame = function(id) {
  clearTimeout(id);
};
copyProps(window, global);

export default 'setup_jsdom'
