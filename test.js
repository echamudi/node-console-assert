const assert = require('assert');
console.assert = require('./');

describe('truthy', function () {
    it('doesn\'t throw error on truthy argument', function () {
        assert.doesNotThrow(() => {
            console.assert(true);
            console.assert([]);
            console.assert(2);
            console.assert(2 === 2);
        });
    });

    it('returns undefined truthy argument', function () {
        let consoleAssertResult = console.assert(true);

        assert.deepStrictEqual(consoleAssertResult, undefined);
    });
});

describe('falsy', function () {
    it('throws error when no argument is passed', function () {
        assert.throws(() => {
            console.assert();
        }, new Error('Assertion failed: console.assert'));
    });

    it('throws error when the first argument is falsy', function () {
        assert.throws(() => {
            console.assert(false);
        }, new Error('Assertion failed: console.assert'));

        assert.throws(() => {
            console.assert(2 === 3);
        }, new Error('Assertion failed: console.assert'));

        assert.throws(() => {
            console.assert(0);
        }, new Error('Assertion failed: console.assert'));

        assert.throws(() => {
            console.assert('');
        }, new Error('Assertion failed: console.assert'));
    });
});

describe('string messages', function () {
    it('throws correct message', function () {
        assert.throws(() => {
            console.assert(false, 'must be true');
        }, new Error('Assertion failed: must be true'));
    });

    it('throws correct message from any number of argument', function () {
        assert.throws(() => {
            console.assert(false, 'must', 'be', 'true');
        }, new Error('Assertion failed: must be true'));
    });
});

describe('other messages', function () {
    it('throws flattened object message', function () {
        assert.throws(() => {
            console.assert(false, 'must be', { prop: 1 });
        }, new Error('Assertion failed: must be { prop: 1 }'));

        assert.throws(() => {
            console.assert(false, 'must be', { prop: 1 }, 'and', [1, 2, 'hey', "ho", { sub: 'a' }]);
        }, new Error('Assertion failed: must be { prop: 1 } and [ 1, 2, \'hey\', \'ho\', { sub: \'a\' } ]'));
    });

    it('throws multiline message', function () {
        assert.throws(() => {
            console.assert(
                false,
                `
                A
                B
                C
                `);
        }, new Error('Assertion failed: \n                A\n                B\n                C\n                '));
    });
});