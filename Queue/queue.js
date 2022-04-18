class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this._length = 0;
    }

    peek() {
        return this.first;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (this._length === 0) {
            this.first = newNode;
            this.last = last;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this._length++;

        return this;

    }
}