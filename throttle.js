const throttle = (callback, delay) => {
    let isClose = false
    let timer = null
    return () => {
        if (isClose) return
        
        isClose = true
        callback()
        clearTimeout(timer)
        timer = setTimeout(function () {
            isClose = false
        }, delay)
    }
}

const sayHi = () => {
    console.log('Hi')
}


// demo
// ensure that the function is called at most once in a specified time period. sayHi() function will be executed every 2 second in demonstration case.
const throttleFunc = throttle(sayHi, 2000)

for (let i = 1; i<=10; i++){
    setTimeout(() => {
        console.log(i,'second!')
        throttleFunc()
      }, i * 1000)
}
