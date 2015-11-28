import { assert } from 'chai';
import ClassList from '../classList';

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
        assert.equal(classList.length, 0);
        assert.equal(classList.toString(), '');
    });

    it('should add one class name', () => {
        classList.add('a');
        assert.equal(classList.length, 1);
        assert.equal(classList.toString(), 'a');
    });

    it('should not add an existing class name', () => {
        classList.add('a');
        classList.add('a');
        assert.equal(classList.length, 1);
        assert.equal(classList.toString(), 'a');
    });

    it('should add several class names', () => {
        classList.add('a', 'b', 'b', 'c');
        assert.equal(classList.length, 3);
        assert.equal(classList.toString(), 'a b c');
    });

    it('should throw error when class name contains whitespace', () => {
        assert.throws(
            function() { classList.add('a b'); },
            'Class name "a b" contains space character, which is not valid.'
        );
        assert.equal(classList.length, 0);
        assert.equal(classList.toString(), '');
    });
});
