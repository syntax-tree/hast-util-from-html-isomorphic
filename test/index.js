import assert from 'node:assert/strict'
import {test} from 'node:test'

import {fromHtmlIsomorphic} from 'hast-util-from-html-isomorphic'

test('parse document', () => {
  const html = '<html><head></head><body></body></html>'
  const tree = fromHtmlIsomorphic(html)

  assert.deepEqual(tree, {
    children: [
      {
        children: [
          {
            children: [],
            properties: {},
            tagName: 'head',
            type: 'element'
          },
          {
            children: [],
            properties: {},
            tagName: 'body',
            type: 'element'
          }
        ],
        properties: {},
        tagName: 'html',
        type: 'element'
      }
    ],
    type: 'root'
  })
})

test('parse single element fragment', () => {
  const html = '<div><p></p></div>'
  const tree = fromHtmlIsomorphic(html, {fragment: true})

  assert.deepEqual(tree, {
    children: [
      {
        children: [
          {
            children: [],
            properties: {},
            tagName: 'p',
            type: 'element'
          }
        ],
        properties: {},
        tagName: 'div',
        type: 'element'
      }
    ],
    type: 'root'
  })
})

test('parse multi element fragment', () => {
  const html = '<p></p><div></div>'
  const tree = fromHtmlIsomorphic(html, {fragment: true})

  assert.deepEqual(tree, {
    children: [
      {
        children: [],
        properties: {},
        tagName: 'p',
        type: 'element'
      },
      {
        children: [],
        properties: {},
        tagName: 'div',
        type: 'element'
      }
    ],
    type: 'root'
  })
})
