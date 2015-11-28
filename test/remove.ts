import { assert } from 'chai';
import ClassList from '../classList';

describe('Method remove.', () => {
    let classList;

    beforeEach(() => {
        classList = new ClassList();
    });

    it('should return nothing and work without errors when called without parameters', () => {
        assert.isUndefined(classList.remove());
    });

    it('should remove one class name', () => {
        classList.add('a');
        classList.remove('a');
        assert.equal(classList.length, 0);
        assert.equal(classList.toString(), '');
    });

    it('should work without errors when receives nonexistent class name', () => {
        classList.add('a');
        classList.remove('b');
        assert.equal(classList.length, 1);
        assert.equal(classList.toString(), 'a');
    });

    it('should remove several class names', () => {
        classList.add('a', 'b', 'c');
        classList.remove('a', 'c');
        assert.equal(classList.length, 1);
        assert.equal(classList.toString(), 'b');
    });

    it('should throw error when class name contains whitespace', () => {
        assert.throws(
            function() { classList.remove('foo bar'); },
            'Class name "foo bar" contains space character, which is not valid.'
        );
        assert.equal(classList.length, 0);
        assert.equal(classList.toString(), '');
    });
});
