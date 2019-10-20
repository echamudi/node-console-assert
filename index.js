const util = require('util');

module.exports = function (expression) {
    if (!expression) {
        var messagesArray = Array.prototype.slice.call(arguments, 1);

        if (messagesArray.length === 0) {
            throw new Error('Assertion failed: console.assert');
        }

        messagesArray = messagesArray.map((el) => util.format.call(this, el));

        var message = Array.prototype.join.call(['Assertion failed:', ...messagesArray], ' ');
        throw new Error(message);
    }

    return;
};
