```js
class Queue {
    constructor(...items) {
        this.reverse = false;
        this.queue = [...items];
    }

    enqueue(...items) {
        return this.reverse
            ? this.queue.push(...items)
            : this.queue.unshift(...items);
    }

    dequeue() {
        return this.reverse ? this.queue.shift() : this.queue.pop();
    }
}

```

