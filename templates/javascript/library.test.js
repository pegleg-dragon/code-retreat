import * as Library from "./library.js"

QUnit.module('sum', function() {
    QUnit.test('simplest case', function(assert) {
        assert.equal(1, 1);
        assert.equal(Library.sum(1,1), 2);
    });
});