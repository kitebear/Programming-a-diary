/*
 * @Author: 谢东昊
 * @Date: 2021-07-10 22:37:54
 * @LastEditTime: 2021-07-13 14:14:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Programming-a-diary/计算机/数据结构与算法/Javascript/Stack.js
 */

class Stack {
    constructor () {
        this.count = 0
        this.list = []
    }

    push (item) {
        this.list.push(item)
        this.count++
    }

    pop () {
        this.count--
        const current = this.list[this.count]
        delete this.list[this.count]
        console.log(current, ' current')
        return current
    }

    size () {
        return this.count
    }

    clear () {
        this.count = 0
        this.list = []
    }
}

let a = new Stack()

a.push('11')
a.push('12')
a.push('13')
console.log(a.pop())
console.log(a.size())
console.log(a)
a.clear()
console.info(a)

module.exports.Stack = Stack