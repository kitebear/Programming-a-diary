/*
 * @Author: donghaoxie
 * @Date: 2021-08-04 13:52:10
 * @LastEditTime: 2021-08-04 14:00:01
 * @LastEditors: Please set LastEditors
 * @Description: 链表
 * @FilePath: /Programming-a-diary/计算机/数据结构与算法/Javascript/LinkedList.js
 */
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

function defaultEquals(a, b) {
  return a === b;
}

class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = null;
    this.equalsFn = equalsFn;
  }
  // 添加链表数据
  push(element) {
    const node = new Node(element);
    let current;
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }
}

const list = new LinkedList()
list.push(15)
list.push(10)
console.log(list)
