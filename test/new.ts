import { assert } from 'chai';
import ClassList from '../ClassList';

describe('Creating instance.', () => {
    it('should creat empty instance', () => {
        assert.strictEqual(new ClassList().toString(), '');
    });

    it('should create list with one element', () => {
        let classList = new ClassList('a');
        assert.strictEqual(classList.toString(), 'a');
    });

    it('should create list with several elements', () => {
        let classList = new ClassList('a', 'b');
        assert.strictEqual(classList.toString(), 'a b');
    });
});
