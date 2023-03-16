/**
 * @typedef {import('hast').Root} Root
 * @typedef {Pick<import('hast-util-from-html').Options, 'fragment'>} Options
 */

import {fromHtml} from 'hast-util-from-html'
import {removePosition} from 'unist-util-remove-position'

/**
 * @param {string} value
 *   Serialized HTML to parse.
 * @param {Options} [options]
 *   Configuration (optional).
 * @returns {import('hast').Root}
 *   Tree
 */
export function fromHtmlIsomorphic(value, options) {
  const tree = fromHtml(value, options)
  removePosition(tree, {force: true})
  delete tree.data
  return tree
}
