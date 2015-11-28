import { ClassListInterface } from './ClassListInterface';

export default class ClassList extends Array implements ClassListInterface {
    length: number;

    add(...classNames: Array<string>): void {
        for(let i = 0; i < classNames.length; i++) {
            let className = classNames[i];
            ClassList._isClassNameValid(className);

            if(!~this.indexOf(className)) {
                this.push(className);
            }
        }
    }

    remove(...classNames: Array<string>): void {}

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
