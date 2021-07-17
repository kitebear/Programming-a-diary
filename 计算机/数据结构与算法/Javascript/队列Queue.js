/*
 * @Author: kitebear
 * @Date: 2021-07-14 17:42:41
 * @LastEditTime: 2021-07-14 18:00:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Programming-a-diary/计算机/数据结构与算法/Javascript/队列Queue.js
 */

class Queue {
    constructor () {
        this.lastcount = 0
        this.count = 0
        this.items = {}
    }
    // 存
    enqueue (item) {
        this.items[this.count] = item
        this.count++
    }
    // 取
    dequeue () {
        const result = this.items[this.lastcount]
        delete this.items[this.lastcount]
        this.lastcount++
        return result
    }

    peek () {
        if (!this.isEmpty()) {
            return undefined
        }
        return this.items[this.lastcount]
    }

    size () {
        return this.count - this.lastcount
    }

    isEmpty () {
        return this.size() === 0
    }
}