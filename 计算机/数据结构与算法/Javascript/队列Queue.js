/*
 * @Author: kitebear
 * @Date: 2021-07-14 17:42:41
 * @LastEditTime: 2021-07-14 18:00:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Programming-a-diary/计算机/数据结构与算法/Javascript/队列Queue.js
 */

class Queue {
  constructor() {
    this.lastindex = 0;
    this.count = 0;
    this.items = {};
  }
  // 存
  enqueue(item) {
    this.items[this.count] = item;
    this.count++;
  }
  // 取
  dequeue() {
    const result = this.items[this.lastindex];
    delete this.items[this.lastindex];
    this.lastindex++;
    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lastindex];
  }

  size() {
    return this.count - this.lastindex;
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.count = 0;
    this.items = {};
    this.lastindex = 0;
  }
  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let objString = `${this.items[this.lastindex]}`;
    for (let index = this.lastindex + 1; index < this.count; index++) {
      objString = `${objString}${this.items[index]}`;
    }
    return objString;
  }
}

// var q = new Queue();
// q.enqueue("1");
// q.enqueue("2");
// q.enqueue("3");
// q.enqueue("4");
// console.log(q);
// console.log(q.toString());
// q.dequeue()
// q.dequeue()
// console.log(q.toString());

module.exports.Queue = Queue