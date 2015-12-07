import { assert } from 'chai';
import ClassList from '../classList';

describe('Method remove.', () => {
    let classList;

    beforeEach(() => {
        classList = new ClassList('a', 'b');
    });

    it('should return nothing and work without errors when called without parameters', () => {
        assert.isUndefined(classList.remove());
    });

    it('should remove one class name', () => {
        classList.remove('a');
        assert.strictEqual(classList.length, 1);
        assert.strictEqual(classList.toString(), 'b');
    });

    it('should work without errors when receives nonexistent class name', () => {
        classList.remove('c');
        assert.strictEqual(classList.length, 2);
        assert.strictEqual(classList.toString(), 'a b');
    });

    it('should remove several class names', () => {
        classList.add('c');
        classList.remove('a', 'c');
        assert.strictEqual(classList.length, 1);
        assert.strictEqual(classList.toString(), 'b');
    });

    it('should throw error when class name contains whitespace', () => {
        assert.throws(
            function() { classList.remove('foo bar'); },
            'Class name "foo bar" contains space character, which is not valid.'
        );
        assert.strictEqual(classList.length, 2);
        assert.strictEqual(classList.toString(), 'a b');
    });
});
