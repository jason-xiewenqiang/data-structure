let Stack = (function() {
    const items = new WeakMap()
    class Stack {
        constructor() {
            items.set(this, [])
        }
        push(element) {
            let s = items.get(this)
            s.push(element)
        }
        pop() {
            let s = items.get(this)
            let r = s.pop()
            return r
        }
        peek() {
            let s = items.get(this)
            return s[s.length - 1]
        }
        clear() {
            items.set(this, [])
        }
        isEmpty() {
            let s = items.get(this)
            return s.length === 0
        }
        print() {
            let s = items.get(this)
            console.log(s.toString())
        }
    }
    return Stack
})()
// 十进制转二进制
function divideBy2(decNumber) {
    let remStack = new Stack()
    let rem
    let binaryString = ''
    while (decNumber > 0) {
        rem = Math.floor(decNumber % 2)
        remStack.push(rem)
        decNumber = Math.floor(decNumber / 2)
    }
    while(!remStack.isEmpty()) {
        binaryString += remStack.pop().toString()
    }
    return binaryString
}
console.log(divideBy2(169))