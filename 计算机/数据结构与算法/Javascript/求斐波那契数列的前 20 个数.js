/*
 * @Author: kitebear
 * @Date: 2021-07-02 16:32:08
 * @LastEditTime: 2021-07-02 16:52:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Programming-a-diary/计算机/数据结构与算法/Javascript/求斐波那契数列的前 20 个数.js
 */
const fibonacci = []
fibonacci[0] = 1
fibonacci[1] = 1

for (let i = 2; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
}

console.log(fibonacci)