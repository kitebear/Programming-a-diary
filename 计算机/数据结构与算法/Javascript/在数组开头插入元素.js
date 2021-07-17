/*
 * @Author: your name
 * @Date: 2021-07-02 16:48:44
 * @LastEditTime: 2021-07-02 16:52:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Programming-a-diary/计算机/数据结构与算法/Javascript/在数组开头插入元素.js
 */
const numbers = [1,2,3]
Array.prototype.insertFirstPosition = function(value) {
  for (let i = this.length; i >= 0; i--) {
    this[i] = this[i - 1];
  }
  this[0] = value;
};
numbers.insertFirstPosition(-1);
numbers.unshift(-2,-3)
console.log(numbers)