# node-console-assert

console.assert polyfill for node environment, make it work like browser's console.assert

## Usage

```js
console.assert = require('node-console-assert');

console.assert(1 + 2 === 3, '1 + 2 must equal 3'); // no error

function addition(a, b) {
    return a * b;
};
console.assert(addition(2, 3) === 5, '2 + 3 must equal 5'); // error
```

If you don't want to modify the global console.assert, you can assign to a new constant.
```js
const consoleAssert = require('node-console-assert');
```

Check more examples in [test.js](https://github.com/ezhmd/node-console-assert/blob/master/test.js) file.

## Development

| Branch | Status |
| - | - |
| master | [![Build Status](https://travis-ci.org/ezhmd/node-console-assert.svg?branch=master)](https://travis-ci.org/ezhmd/node-console-assert) [![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fezhmd%2Fnode-console-assert.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fezhmd%2Fnode-console-assert?ref=badge_shield)
|

## License

2019 © [Ezzat Chamudi](https://github.com/ezhmd)

The code is released under [MIT License](https://opensource.org/licenses/MIT)

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fezhmd%2Fnode-console-assert.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fezhmd%2Fnode-console-assert?ref=badge_large)