import { assert } from 'chai';
import ClassList from '../classList';

describe('Method item.', () => {
    let classList;

    beforeEach(() => {
        classList = new ClassList('a', 'b');
    });

    it('should throw error when called without parameter', () => {
        assert.throws(
            function() { classList.item(); },
            TypeError,
            '1 argument required, but only 0 present.'
        );
    });

    it('should return first class name', () => {
        assert.equal(classList.item(0), 'a');
    });

    it('should return second class name', () => {
        assert.equal(classList.item(1), 'b');
    });

    it('should return `null` for the unavailable index', () => {
        assert.isNull(classList.item(2));
    });
});
