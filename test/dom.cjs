const {JSDOM} = require('jsdom')

const jsdom = new JSDOM()
globalThis.document = jsdom.window.document
globalThis.DOMParser = jsdom.window.DOMParser
