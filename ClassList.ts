import { ClassListInterface } from './ClassListInterface';

export default class ClassList extends Array implements ClassListInterface {
    length: number;

    add(...classNames: Array<string>): void {
        if(ClassList._isClassNamesValid(...classNames)) {
            this.push(...classNames);
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

    private static _isClassNamesValid(...classNames: Array<string>): boolean {
        return classNames.every(name => {
            if(~name.indexOf(' ')) {
                throw new InvalidClassNameError(name);
            } else return true;
        });
    }
}

class InvalidClassNameError extends Error {
    constructor(className: string) {
        this.name = 'InvalidClassNameError';
        this.message = `Class name "${className}" contains space character, which is not valid.`;
        super();
    }
}
