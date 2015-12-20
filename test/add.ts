import { assert } from 'chai';
import ClassList from '../ClassList';

describe('Method add.', () => {
    let classList;

    beforeEach(() => {
        classList = new ClassList();
    });

    it('should return nothing', () => {
        assert.isUndefined(classList.add('a'));
    });

    it('should work without errors when called without parameters', () => {
        classList.add();
        assert.strictEqual(classList.length, 0);
        assert.strictEqual(classList.toString(), '');
    });

    it('should add one class name', () => {
        classList.add('a');
        assert.strictEqual(classList.length, 1);
        assert.strictEqual(classList.toString(), 'a');
    });

    it('should not add an existing class name', () => {
        classList.add('a');
        classList.add('a');
        assert.strictEqual(classList.length, 1);
        assert.strictEqual(classList.toString(), 'a');
    });

    it('should add several class names', () => {
        classList.add('a', 'b', 'b', 'c');
        assert.strictEqual(classList.length, 3);
        assert.strictEqual(classList.toString(), 'a b c');
    });

    it('should throw error when class name contains whitespace', () => {
        assert.throws(
            function() { classList.add('a b'); },
            'Class name "a b" contains space character, which is not valid.'
        );
        assert.strictEqual(classList.length, 0);
        assert.strictEqual(classList.toString(), '');
    });
});
