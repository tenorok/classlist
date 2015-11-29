import { assert } from 'chai';
import ClassList from '../classList';

describe('Creating instance.', () => {
    it('should creat empty instance', () => {
        assert.equal(new ClassList().toString(), '');
    });

    it('should create list with one element', () => {
        let classList = new ClassList('a');
        assert.equal(classList.toString(), 'a');
    });

    it('should create list with several elements', () => {
        let classList = new ClassList('a', 'b');
        assert.equal(classList.toString(), 'a b');
    });
});
