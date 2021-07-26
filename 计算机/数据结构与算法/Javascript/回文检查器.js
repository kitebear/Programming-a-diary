const { Deque } = require("./双端队列Deque")

function palindRomeChecker (str) {
    let tempString = ""
    const deque = Deque()
    let isEquals = true
    let last = ''
    let first = ''
    tempString = str.toLocaleLowerCase().split(" ").join("")

    for (let i = 0; i < tempString.length; i++) {
        const str = tempString.charAt(i);
        deque.addBack(str)
    }

    while (deque.size() > 1 && isEquals) {
        last = deque.removeBack()
        first = deque.removeFront()
        if(last !== first) {
            isEquals = false
        }
    }
    return isEquals
}