import { ClassListInterface } from './ClassListInterface';

export default class ClassList extends Array<string> implements ClassListInterface {
    length: number;

    constructor(...classNames: Array<string>) {
        super();
        this.push(...classNames);
    }

    add(...classNames: Array<string>): void {
        for(let i = 0; i < classNames.length; i++) {
            let className = classNames[i];
            ClassList._isClassNameValid(className);

            if(!~this.indexOf(className)) {
                this.push(className);
            }
        }
    }

    remove(...classNames: Array<string>): void {
        for(let i = 0; i < classNames.length; i++) {
            let className = classNames[i];
            ClassList._isClassNameValid(className);

            let index = this.indexOf(className);
            if(~index) {
                this.splice(index, 1);
            }
        }
    }

    contains(className: string): boolean {
        return true;
    }

    toggle(className: string, force?: boolean): boolean {
        return true;
    }

    item(index: number): string {
        return '';
    }

    toString(): string {
        return this.join(' ');
    }

    private static _isClassNameValid(className: string): boolean {
        if(~className.indexOf(' ')) {
            throw new InvalidClassNameError(className);
        }
        return true;
    }
}

class InvalidClassNameError extends Error {
    constructor(className: string) {
        this.name = 'InvalidClassNameError';
        this.message = `Class name "${className}" contains space character, which is not valid.`;
        super();
    }
}
