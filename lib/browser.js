/**
 * @typedef {typeof import('./index.js').fromHtml} FromHtml
 * @typedef {import('hast').RootContent} RootContent
 */

import {fromDom} from 'hast-util-from-dom'

const template = document.createElement('template')
const parser = new DOMParser()

/**
 * @param {string} value
 */
function parseFragment(value) {
  template.innerHTML = value
  return template.content
}

/** @type {FromHtml} */
export function fromHtml(value, options) {
  /** @type {RootContent[]} */
  const children = []
  const node = options?.fragment
    ? parseFragment(value)
    : parser.parseFromString(value, 'text/html')

  while (node.firstChild) {
    children.push(/** @type {RootContent} */ (fromDom(node.firstChild)))
    node.firstChild.remove()
  }

  return {
    type: 'root',
    children
  }
}
