import assert from 'node:assert/strict'
import test from 'node:test'
import {fromHtmlIsomorphic} from 'hast-util-from-html-isomorphic'

test('hast-util-from-html-isomorphic', async function (t) {
  await t.test('should parse a document', async function () {
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

  await t.test('should support `fragment: true`', async function () {
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

  await t.test(
    'should support `fragment: true` w/ multiple children',
    async function () {
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
    }
  )
})
