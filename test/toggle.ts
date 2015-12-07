import { assert } from 'chai';
import ClassList from '../classList';

describe('Method toggle.', () => {
    let classList;

    beforeEach(() => {
        classList = new ClassList('a', 'b');
    });

    it('should throw error when called without parameter', () => {
        assert.throws(
            function() { classList.toggle(); },
            TypeError,
            '1 argument required, but only 0 present.'
        );
    });

    it('should remove existing class name', () => {
        assert.isFalse(classList.toggle('a'));
        assert.strictEqual(classList.toString(), 'b');
    });

    it('should add nonexistent class name', () => {
        assert.isTrue(classList.toggle('c'));
        assert.strictEqual(classList.toString(), 'a b c');
    });

    describe('Second parameter.', () => {
        it('should not remove class name', () => {
            assert.isTrue(classList.toggle('b', true));
            assert.strictEqual(classList.toString(), 'a b');
        });

        it('should only add class name when it is nonexistent', () => {
            assert.isTrue(classList.toggle('c', true));
            assert.strictEqual(classList.toString(), 'a b c');
        });

        it('should not add class name', () => {
            assert.isFalse(classList.toggle('c', false));
            assert.strictEqual(classList.toString(), 'a b');
        });

        it('should only remove class name when it is existing', () => {
            assert.isFalse(classList.toggle('b', false));
            assert.strictEqual(classList.toString(), 'a');
        });
    });
});
