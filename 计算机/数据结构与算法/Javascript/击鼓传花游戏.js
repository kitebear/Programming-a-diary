const { Queue } = require("./队列Queue");
console.log(Queue)
//击鼓传花
function hotPatato(elementList, num) {
  const queue = new Queue();
  const elementedList = [];
  // 存入队列
  for (let i = 0; i < elementList.length; i++) {
    queue.enqueue(elementList[i]);
  }
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    elementedList.push(queue.dequeue());
  }
  return {
    elementedList,
    winer: queue.dequeue(),
  };
}

const names = ["theta", "doge", "eth", "btc"];
const num = 3;  
const result = hotPatato(names, num);

result.elementedList.forEach(name => console.log(`${name},在击鼓传花中被淘汰了！`))
console.log(`${result.winer}, 是最后的胜利者！`)