/**
 * @typedef {typeof import('./index.js').fromHtmlIsomorphic} FromHtmlIsomorphic
 * @typedef {import('hast').Root} Root
 */

import {fromDom} from 'hast-util-from-dom'

const parser = new DOMParser()

/**
 * @param {string} value
 */
function parseFragment(value) {
  const template = document.createElement('template')
  template.innerHTML = value
  return template.content
}

/** @type {FromHtmlIsomorphic} */
export function fromHtmlIsomorphic(value, options) {
  const node = options?.fragment
    ? parseFragment(value)
    : parser.parseFromString(value, 'text/html')

  return /** @type {Root} */ (fromDom(node))
}
