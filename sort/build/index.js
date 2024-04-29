"use strict";
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                // if a collection is an array
                if (this.collection instanceof Array) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        const leftHand = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = leftHand;
                    }
                }
                // if collection is a string
                if (typeof this.collection === 'string') {
                }
            }
        }
    }
}
const sorter = new Sorter([3, 1, 4, 1, 5, 9, 2, 6, 5]);
sorter.sort();
console.log(sorter.collection);
