function debounce(func, wait) {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    let self = this;
    let args = arguments;

    timer = setTimeout(function () {
      func.apply(self, args);
      timer = null;
    });
  };
}


function print () {
    console.log('Hello World!')
}

const printDebounce = debounce(print, 3000)

let count = 3
while (count--) {
    printDebounce()
}