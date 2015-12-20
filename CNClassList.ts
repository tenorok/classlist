import ClassList from "./ClassList";

export interface NodeInterface {
    className?: string;
}

export default class CNClassList extends ClassList {
    private _node: NodeInterface;
    private _className: string;

    constructor(node: NodeInterface) {
        super();
        this._node = node;
        if(typeof this._node.className === 'undefined') {
            this._node.className = '';
        }
        this._syncWithClassName();
    }

    add(...classNames: Array<string>): void {
        this._syncWithClassName();
        super.add(...classNames);
        this._node.className = this._toStringWithoutSync();
    }

    remove(...classNames: Array<string>): void {
        this._syncWithClassName();
        super.remove(...classNames);
        this._node.className = this._toStringWithoutSync();
    }

    contains(className: string): boolean {
        this._syncWithClassName();
        return super.contains(className);
    }

    toggle(className: string, force?: boolean): boolean {
        let result = super.toggle(className, force);
        this._node.className = this._toStringWithoutSync();
        return result;
    }

    item(index: number): string {
        this._syncWithClassName();
        return super.item(index);
    }

    toString(): string {
        this._syncWithClassName();
        return super.toString();
    }

    private _toStringWithoutSync(): string {
        return super.toString();
    }

    private _syncWithClassName() {
        if(this._className === this._node.className) return;

        this.length = 0;
        this._className = this._node.className;

        if(this._className) {
            this.push(...this._className.split(' ').filter(name => !!name));
        }
    }
}
