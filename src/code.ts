'use strict';

export function sum (a, b) {
    return a + b;
}

export function nonExistentFuncRunner () {
    const obj = {};

    // following line should cause an error in unit tests
    obj.nonExistentFunc();

    return true;
}
