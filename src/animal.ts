'use strict';

export default class Animal {
    private type: string;

    constructor (type) {
        this.type = type;
    }

    public walk(): void {
        console.log(this.type + ' walks');
    }
}
