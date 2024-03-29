// jest.setup.js
const { JSDOM } = require('jsdom');

const dom = new JSDOM('<!doctype html><html><body><div id="signupForm"></div><div id="loginModal"></div></body></html>', {
  url: 'http://localhost'
});

global.document = dom.window.document;
global.window = dom.window;
global.console.error = jest.fn();

global.navigator = {
  userAgent: 'node.js',
};

// Mock createElement function
global.document.createElement = jest.fn().mockImplementation((tagName) => {
  return {
    id: tagName,
    click: jest.fn(), // Mock click method
  };
});

// Append body to the document directly
global.document.body = dom.window.document.body;


