# hast-util-from-html-isomorphic

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[hast][] utility that turns HTML into a syntax tree.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`fromHtml(value[, options])`](#fromhtmlvalue-options)
    *   [`Options`](#options)
    *   [`OnError`](#onerror)
    *   [`ErrorCode`](#errorcode)
    *   [`ErrorSeverity`](#errorseverity)
*   [Examples](#examples)
    *   [Example: fragment versus document](#example-fragment-versus-document)
    *   [Example: whitespace around and inside `<html>`](#example-whitespace-around-and-inside-html)
    *   [Example: parse errors](#example-parse-errors)
*   [Syntax](#syntax)
*   [Types](#types-2)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This package is a utility that takes HTML input and turns it into a hast syntax
tree.

When running in a browser, this uses [`hast-util-from-dom`][hast-util-from-dom],
otherwise this uses [`hast-util-from-html`][hast-util-from-html].

## When should I use this?

If you want to handle syntax trees manually in isomorphic code and care about
bundle size, use this.

If you want to use positional information, use
[`hast-util-from-html`][hast-util-from-html].

If you don’t care about positional information, and your code will only run in
the browser, use [`hast-util-from-dom`][hast-util-from-dom].

Finally you can use the utility [`hast-util-to-html`][hast-util-to-html] to do
the inverse of this utility.
It turns hast into HTML.

## Install

This package is [ESM only][esm].
In Node.js (version 14.14+ and 16.0+), install with [npm][]:

```sh
npm install hast-util-from-html-isomorphic
```

In Deno with [`esm.sh`][esmsh]:

```js
import {fromHtml} from "https://esm.sh/hast-util-from-html-isomorphic@1"
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {fromHtml} from "https://esm.sh/hast-util-from-html-isomorphic@1?bundle"
</script>
```

## Use

```js
import {fromHtml} from 'hast-util-from-html-isomorphic'

const tree = fromHtml('<h1>Hello, world!</h1>', {fragment: true})

console.log(tree)
```

Yields (positional info and data omitted for brevity):

```js
{
  type: 'root',
  children: [
    {
      type: 'element',
      tagName: 'h1',
      properties: {},
      children: [Array],
      position: [Object]
    }
  ]
}
```

## API

This package exports the identifier [`fromHtml`][fromhtml].
There is no default export.

### `fromHtml(value[, options])`

Turn serialized HTML into a hast tree.

###### Parameters

<!-- To do: update link when `vfile` has new docs. -->

*   `value` ([`Compatible`][compatible])
    — serialized HTML to parse
*   `options` ([`Options`][options], optional)
    — configuration

###### Returns

Tree ([`Root`][root]).

### `Options`

Configuration (TypeScript type).

##### Fields

###### `options.fragment`

Whether to parse as a fragment (`boolean`, default: `false`).
The default is to expect a whole document.
In document mode, unopened `html`, `head`, and `body` elements are opened.

## Examples

### Example: fragment versus document

The following example shows the difference between parsing as a document and
parsing as a fragment:

```js
import {fromHtml} from 'hast-util-from-html-isomorphic'

const doc = '<title>Hi!</title><h1>Hello!</h1>'

console.log(fromHtml(doc))

console.log(fromHtml(doc, {fragment: true}))
```

…yields (positional info and data omitted for brevity):

```js
{
  type: 'root',
  children: [
    {type: 'element', tagName: 'html', properties: {}, children: [Array]}
  ]
}
```

```js
{
  type: 'root',
  children: [
    {type: 'element', tagName: 'title', properties: {}, children: [Array]},
    {type: 'element', tagName: 'h1', properties: {}, children: [Array]}
  ]
}
```

> 👉 **Note**: observe that when a whole document is expected (first example),
> missing elements are opened and closed.

## Syntax

HTML is parsed according to WHATWG HTML (the living standard), which is also
followed by browsers such as Chrome and Firefox.

## Types

This package is fully typed with [TypeScript][].
It exports the additional type [`Options`][options].

## Compatibility

Projects maintained by the unified collective are compatible with all maintained
versions of Node.js.
As of now, that is Node.js 14.14+ and 16.0+.
Our projects sometimes work with older versions, but this is not guaranteed.

## Security

Parsing HTML is safe but using user-provided content can open you up to a
[cross-site scripting (XSS)][xss] attack.
Use [`hast-util-santize`][hast-util-sanitize] to make the hast tree safe.

## Related

*   [`hast-util-from-html`](https://github.com/syntax-tree/hast-util-from-html)
    — parse html into hast
*   [`hast-util-from-dom`](https://github.com/syntax-tree/hast-util-from-dom)
    — parse a DOM tree into hast
*   [`hast-util-to-html`](https://github.com/syntax-tree/hast-util-to-html)
    — serialize hast
*   [`hast-util-sanitize`](https://github.com/syntax-tree/hast-util-sanitize)
    — sanitize hast
*   [`xast-util-from-xml`][xast-util-from-xml]
    — parse XML

## Contribute

See [`contributing.md`][contributing] in [`syntax-tree/.github`][health] for
ways to get started.
See [`support.md`][support] for ways to get help.

This project has a [code of conduct][coc].
By interacting with this repository, organization, or community you agree to
abide by its terms.

## License

[MIT][license] © [Remco Haszing][author]

<!-- Definitions -->

[build-badge]: https://github.com/syntax-tree/hast-util-from-html-isomorphic/workflows/main/badge.svg

[build]: https://github.com/syntax-tree/hast-util-from-html-isomorphic/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/hast-util-from-html-isomorphic.svg

[coverage]: https://codecov.io/github/syntax-tree/hast-util-from-html-isomorphic

[downloads-badge]: https://img.shields.io/npm/dm/hast-util-from-html-isomorphic.svg

[downloads]: https://www.npmjs.com/package/hast-util-from-html-isomorphic

[size-badge]: https://img.shields.io/bundlephobia/minzip/hast-util-from-html-isomorphic.svg

[size]: https://bundlephobia.com/result?p=hast-util-from-html-isomorphic

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/syntax-tree/unist/discussions

[npm]: https://docs.npmjs.com/cli/install

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[typescript]: https://www.typescriptlang.org

[license]: license

[author]: https://github.com/remcohaszing

[health]: https://github.com/syntax-tree/.github

[contributing]: https://github.com/syntax-tree/.github/blob/main/contributing.md

[support]: https://github.com/syntax-tree/.github/blob/main/support.md

[coc]: https://github.com/syntax-tree/.github/blob/main/code-of-conduct.md

[xss]: https://en.wikipedia.org/wiki/Cross-site_scripting

[hast]: https://github.com/syntax-tree/hast

[root]: https://github.com/syntax-tree/hast#root

[hast-util-sanitize]: https://github.com/syntax-tree/hast-util-sanitize

[hast-util-from-dom]: https://github.com/syntax-tree/hast-util-from-dom

[hast-util-from-html]: https://github.com/syntax-tree/hast-util-from-html

[hast-util-to-html]: https://github.com/syntax-tree/hast-util-to-html

[xast-util-from-xml]: https://github.com/syntax-tree/xast-util-from-xml

[fromhtml]: #fromhtmlvalue-options

[options]: #options

[compatible]: https://github.com/vfile/vfile/blob/03efac7/lib/index.js#L16
