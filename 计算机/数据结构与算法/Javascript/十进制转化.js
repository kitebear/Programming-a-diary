/*
 * @Author: kitebear
 * @Date: 2021-07-10 22:36:33
 * @LastEditTime: 2021-07-14 16:51:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Programming-a-diary/计算机/数据结构与算法/Javascript/十进制转化.js
 */
const { Stack } = require('./Stack')

function baseConverter(number, base) {
  const remStack = new Stack();
  const digits = "0123456789ABCDEFGHIJKLMNOPQRSNUVWXYZ";
  // 只转换2进制到36进制数据
  if (base < 2 || base > 36) {
    return;
  }
  let temp = number;
  while (temp) {
    remStack.push(temp % base);
    temp = Math.floor(temp / base);
  }

  let result = "";

  while (remStack.size()) {
    result += digits[remStack.pop()];
  }
  return result;
}

const result = baseConverter(100, 32)