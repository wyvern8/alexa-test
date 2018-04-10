import { default as assert } from 'assert';
import { describe, it } from 'mocha';

describe('alexaTestLambda', function() {
    describe('setup', function() {
        it('should work', function(done) {
            assert.equal(1, 1);
            done();
        });
    });
});
