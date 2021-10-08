function throttle (func, wait) {
    let lastTime = 0
    let timer = null

    return function () {
        if (timer) {
            clearTimeout(timer)
            timer = null
        }

        let self = this
        let args = arguments
        let nowTime = +new Date()
        
        const remainWaitTime = wait - (nowTime - lastTime)
        // 如果
        if (remainWaitTime <= 0) {
            lastTime = nowTime
            func.apply(self, args)
        } else {
            // 如果在wait时间段内，再次触发了函数
            timer = setTimeout(function () {
                lastTime = +new Date()
                func.apply(self, args)
                timer = null
            }, remainWaitTime)
        }
    }
}