# Abstract `classList` implementation for any environment

[![npm](https://img.shields.io/npm/v/cnclasslist.svg)](https://www.npmjs.com/package/cnclasslist)
[![Build Status](https://img.shields.io/travis/tenorok/cnclasslist/master.svg)](https://travis-ci.org/tenorok/cnclasslist)
[![Coverage Status](https://img.shields.io/coveralls/tenorok/cnclasslist/master.svg)](https://coveralls.io/r/tenorok/cnclasslist)

In this project realized two classes:

1. [`ClassList`](#classlist) – it's full implementation methods of [browser classList property](http://www.w3schools.com/jsref/prop_element_classlist.asp), except that this class is abstract and not tied to DOM. You can just add and remove classes in list, then get result string.

2. [`CNClassList`](#cnclasslist) – is the inheritor of previous class. The main goal of this class is synchronize classes list with `className` property of the same object. Intended for using with [NativeScript](https://www.nativescript.org) and [TypeScript](http://www.typescriptlang.org) if you wish.

## Installation

```sh
npm install cnclasslist
```

### Include

You can use [`ClassList`](#classlist) and [`CNClassList`](#cnclasslist) both in browser and in Node.js as CommonJS-module:

```js
const ClassList = require('cnclasslist').ClassList;
const CNClassList = require('cnclasslist').CNClassList;
```

Or in [ES2015 format](https://babeljs.io/docs/learn-es2015/#modules):
```js
import { ClassList, CNClassList } from 'cnclasslist';
```

## ClassList

This class implementing full API of standard [`classList` from browser](http://www.w3schools.com/jsref/prop_element_classlist.asp).

### Constructor

You can pass list of classes when creating instance of ClassList.

```js
new(...classNames: Array<string>): ClassList;
```

Example:

```js
let cl = new ClassList('first', 'second');
```

### Method `toString`

Returns string representation of classes list.

```js
toString(): string;
```

Example:

```js
let cl = new ClassList('first', 'second');
cl.toString(); // → 'first second'
```

### Method `add`

Adds classes.

```js
add(...classNames: Array<string>): void;
```

Example:

```js
let cl = new ClassList();
cl.add('first', 'second');
cl.toString(); // → 'first second'
```

### Method `remove`

Removes classes.

```js
remove(...classNames: Array<string>): void;
```

Example:

```js
let cl = new ClassList('first', 'second', 'third');
cl.remove('first', 'third');
cl.toString(); // → 'second'
```

### Method `contains`

Checks that in the list contains class with given name.

```js
contains(className: string): boolean;
```

Example:

```js
let cl = new ClassList('first', 'second');
cl.contains('first'); // → true
cl.contains('third'); // → false
```

### Method `toggle`

Adds class if his was not and removes if him it is.
With parameter `force` class may be only added or only removed accordingly his value.

```js
toggle(className: string, force?: boolean): boolean;
```

Example:

```js
let cl = new ClassList('first');
cl.toggle('second');
cl.toString(); // → 'first second'
cl.toggle('second');
cl.toString(); // → 'first'

cl.toggle('first', true);
cl.toString(); // → 'first'
cl.toggle('first', false);
cl.toString(); // → ''
```

### Method `item`

Returns class name for given index.

```js
item(index: number): string;
```

Example:

```js
let cl = new ClassList('first', 'second');
cl.item(1); // → 'second'
cl.item(2); // → null
```

### Property `length`

Number of classes.

```js
length: number;
```

Example:

```js
let cl = new ClassList('first', 'second');
cl.length; // → 2
```

## CNClassList

API of this class exactly as [`ClassList`](#classlist), but as addition he do synchronizing list of classes with property `className` of the same object.

### Constructor

You should pass object when creating instance of CNClassList.

```js
interface NodeInterface {
    className?: string;
}
new(node: NodeInterface): CNClassList;
```

Example:

```js
let node = { className: '' };
let cl = new CNClassList(node);
```

### Example of synchronization

```js
let node = { className: 'first second' };
let cl = new CNClassList(node);
cl.toString(); // → 'first second'
cl.add('third');
node.className; // → 'first second third'
node.className = 'fourth';
cl.toString(); // → 'fourth'
```
