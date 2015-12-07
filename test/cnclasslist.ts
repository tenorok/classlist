import { assert } from 'chai';
import CNClassList from '../CNClassList';

describe('ClassList which should be synchronised with className property.', () => {
    let view;

    describe('Without className property.', () => {
        beforeEach(() => {
            view = {};
            view.classList = new CNClassList(view);
        });

        it('className should be empty', () => {
            assert.strictEqual(view.className, '');
        });

        it('method add', () => {
            view.classList.add('a');
            assert.strictEqual(view.className, 'a');
        });
    });

    describe('With empty className property.', () => {
        beforeEach(() => {
            view = { className: '' };
            view.classList = new CNClassList(view);
        });

        it('method add', () => {
            assert.isUndefined(view.classList.add('a', 'b'));
            assert.strictEqual(view.className, 'a b');
        });
    });

    describe('With not empty className property.', () => {
        beforeEach(() => {
            view = { className: 'foo' };
            view.classList = new CNClassList(view);
        });

        it('method add', () => {
            assert.isUndefined(view.classList.add('bar'));
            assert.strictEqual(view.className, 'foo bar');
        });

        it('method remove', () => {
            assert.isUndefined(view.classList.remove('foo'));
            assert.strictEqual(view.className, '');
        });

        it('method toggle', () => {
            assert.isTrue(view.classList.toggle('bar'));
            assert.strictEqual(view.className, 'foo bar');
            assert.isFalse(view.classList.toggle('foo'));
            assert.strictEqual(view.className, 'bar');
        });
    });

    describe('Changing className property.', () => {
        beforeEach(() => {
            view = { className: 'a' };
            view.classList = new CNClassList(view);
        });

        it('method add', () => {
            view.className = '';
            view.classList.add('b');
            assert.strictEqual(view.className, 'b');
            assert.strictEqual(view.classList.length, 1);
        });

        it('double space between class names and method remove', () => {
            view.className = 'b  c';
            view.classList.remove('b');
            assert.strictEqual(view.className, 'c');
            assert.strictEqual(view.classList.length, 1);
        });

        it('method contains', () => {
            view.className = 'b';
            assert.isFalse(view.classList.contains('a'));
            assert.isTrue(view.classList.contains('b'));
        });

        it('method toggle', () => {
            view.className = 'b c';
            view.classList.toggle('a');
            assert.strictEqual(view.className, 'b c a');

            view.className = 'a';
            view.classList.toggle('a');
            assert.strictEqual(view.className, '');

            view.className = 'b';
            view.classList.toggle('a', true);
            assert.strictEqual(view.className, 'b a');

            view.className = 'c';
            view.classList.toggle('c', false);
            assert.strictEqual(view.className, '');
        });

        it('method item', () => {
            view.className = 'b c';
            assert.strictEqual(view.classList.item(1), 'c');
        });

        it('method toString', () => {
            view.className = 'b c';
            assert.strictEqual(view.classList.toString(), 'b c');
        });
    });
});
