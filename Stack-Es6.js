class Stack {
    constructor(){
        this.items = []
    }
    push(element) {
        this.items.push(element)
    }
    pop() {
        return this.items.pop()
    }
    size() {
        return this.items.length
    }
    isEmpty() {
        return this.items.lenght === 0
    }
    clear() {
        this.items = []
    }
    peek() {
        return this.items[this.items.length - 1]
    }
    print(){
        console.log(this.items.toString())
    }
}