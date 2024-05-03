class LinkedListNode {
    next: LinkedListNode | null = null;

    constructor(public data: number) {}
}



export class LinkedList {
    head: LinkedListNode | null = null;

    add(data: number): void {
        const node = new LinkedListNode(data);

        if(!this.head) {
            this.head = node;
            return;
        }

        let current = this.head;
        while(current.next) {
            current = current.next
        }

        current.next = node;
    }

    get length(): number {

        if(!this.head) {
            return 0;
        }

        let length = 1;
        let current = this.head;

        while(current.next) {
            length++;
            current = current.next;
        }

        return length;
    }

    at(index: number): LinkedListNode {
        if(!this.head) {
            throw new Error('Index out of bounds. List is empty');
        }

        let counter = 0;
        let current: LinkedListNode | null = this.head; // type annotation -> specify the expected data type of a variable, parametrs and return types

        while(current) {
            if(counter === index) {
                return current;
            }

            counter++;
            current = current.next;
        }

        throw new Error('Index out of bounds')
    }

}

