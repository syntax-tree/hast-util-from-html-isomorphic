/**
 * @typedef {import('hast').Root} Root
 * @typedef {Pick<import('hast-util-from-html').Options, 'fragment'>} Options
 */

import {fromHtml as fromHtmlNode} from 'hast-util-from-html'

/**
 * @param {string} value
 *   Serialized HTML to parse.
 * @param {Options} [options]
 *   Configuration (optional).
 * @returns {import('hast').Root}
 *   Tree
 */
export function fromHtml(value, options) {
  return fromHtmlNode(value, options)
}
