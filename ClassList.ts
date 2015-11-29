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
            if(this.contains(className)) continue;

            this.push(className);
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
        ClassList._isRequiredParamExists(className);

        return !!~this.indexOf(className);
    }

    toggle(className: string, force?: boolean): boolean {
        return true;
    }

    item(index: number): string {
        ClassList._isRequiredParamExists(index);

        return this[index] || null;
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

    private static _isRequiredParamExists(param: any): boolean {
        if(typeof param === 'undefined') {
            throw new TypeError('1 argument required, but only 0 present.');
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
