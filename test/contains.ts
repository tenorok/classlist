import { assert } from 'chai';
import ClassList from '../ClassList';

describe('Method contains.', () => {
    let classList;

    beforeEach(() => {
        classList = new ClassList('a');
    });

    it('should throw error when called without parameter', () => {
        assert.throws(
            function() { classList.contains(); },
            TypeError,
            '1 argument required, but only 0 present.'
        );
    });

    it('should return `true` for available class name', () => {
        assert.isTrue(classList.contains('a'));
    });

    it('should return `false` for the unavailable class name', () => {
        assert.isFalse(classList.contains('b'));
    });
});
