"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    sort() {
        const { length } = this;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
/*
How Bubble Sort Works:
    1. Start from the beginning of the list.
    2. Compare the first two elements of the list. Swap if the first element is greater than the second element.
    3. Move to the next pair of elements comparing and swapping if necessary.
    4. Continue untill the end of the list. At this point the larger element will be at the end of the list.
    5. Reapeat step 1 to 4 for the remaining elements of the list, excluding the last (already sorted) element each time.
    6. Continue untill the entore list is sorted
*/ 
