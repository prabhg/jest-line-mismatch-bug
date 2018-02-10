'use strict';

export default class Person {
    private name: string;

    constructor (name = 'anonymous') {
        this.name = name;
    }

    public getName(): string {
        return this.name
    }
}
