// To do: use ESM when Node 18 is EOL, then we can use `--import` instead
// of `-r`.

const {JSDOM} = require('jsdom')

const jsdom = new JSDOM()
globalThis.document = jsdom.window.document
globalThis.DOMParser = jsdom.window.DOMParser
