import assert from 'node:assert/strict'
import {test} from 'node:test'
import {fromHtmlIsomorphic} from 'hast-util-from-html-isomorphic'

test('parse document', () => {
  const html = '<html><head></head><body></body></html>'
  const tree = fromHtmlIsomorphic(html)

  assert.deepEqual(tree, {
    type: 'root',
    children: [
      {
        type: 'element',
        tagName: 'html',
        properties: {},
        children: [
          {
            type: 'element',
            tagName: 'head',
            properties: {},
            children: []
          },
          {
            type: 'element',
            tagName: 'body',
            properties: {},
            children: []
          }
        ]
      }
    ]
  })
})

test('parse single element fragment', () => {
  const html = '<div><p></p></div>'
  const tree = fromHtmlIsomorphic(html, {fragment: true})

  assert.deepEqual(tree, {
    type: 'root',
    children: [
      {
        type: 'element',
        tagName: 'div',
        properties: {},
        children: [
          {
            type: 'element',
            tagName: 'p',
            properties: {},
            children: []
          }
        ]
      }
    ]
  })
})

test('parse multi element fragment', () => {
  const html = '<p></p><div></div>'
  const tree = fromHtmlIsomorphic(html, {fragment: true})

  assert.deepEqual(tree, {
    type: 'root',
    children: [
      {
        type: 'element',
        tagName: 'p',
        children: [],
        properties: {}
      },
      {
        type: 'element',
        tagName: 'div',
        properties: {},
        children: []
      }
    ]
  })
})
