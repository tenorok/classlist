export interface ClassListInterface {

    /**
     * Adds classes.
     * @param classNames - Names of classes.
     */
    add(...classNames: Array<string>): void;

    /**
     * Removes classes.
     * @param classNames - Names of classes.
     */
    remove(...classNames: Array<string>): void;

    /**
     * Checks that in the list contains class with given name.
     * @param className - Name of class.
     */
    contains(className: string): boolean;

    /**
     * Adds class if his was not and removes if him it is.
     * With parameter `force` class may be only added or only removed accordingly his value.
     * @param className - Name of class.
     * @param force - Flag for add or remove class.
     */
    toggle(className: string, force?: boolean): boolean;

    /**
     * Returns class name for given index.
     * @param index - Index of class.
     */
    item(index: number): string;

    /**
     * Returns string representation of classes list.
     */
    toString(): string;

    /**
     * Number of classes.
     */
    length: number;
}
