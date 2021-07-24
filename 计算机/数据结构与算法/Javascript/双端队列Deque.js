class Deque {
    constructor() {
      this.lastindex = 0;
      this.count = 0;
      this.items = {};
    }
    addFront (item) {
        if (this.isEmpty()) {
            this.addBack(item)
        } else if (this.lastindex > 0) {
            --this.lastindex
            this.items[this.lastindex] = item;
        } else {
            for (let i = this.count; i > 0; i--) {
                this.items[i] = this.items[i - 1];
            }
            this.count++
            this.lastindex = 0
            this.items[0] = item
        }
    }
    addBack (item) {
        this.items[this.count] = item;
        this.count++;
    }
    removeFront () {
        if (this.isEmpty()) {
            return undefined
        }
        const result = this.items[this.lastindex]
        delete this.items[this.lastindex]
        this.lastindex++
        return result
    }
    removeBack () {
        const result = this.items[this.count]
        delete this.items[this.count]
        this.count--
        return result
    }
  
    peekFront() {
      if (this.isEmpty()) {
        return undefined;
      }
      return this.items[this.lastindex];
    }

    peekBack() {
        if (this.isEmpty()) {
          return undefined;
        }
        return this.items[this.count];
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
  
  var q = new Deque();
  q.addBack("1");
  q.addBack("2");
  q.addFront("4");
  q.addBack("3");
  q.addFront("4");
  console.log(q.toString());
  q.removeFront()
  q.removeFront()
  console.log(q.toString());