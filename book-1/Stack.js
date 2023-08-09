function Stack() {
    let items = [];
    this.push = function(element) {
        items.push(element)
    }
    this.pop = function() {
        return items.pop()
    }
    this.peek = function () {
        return items[items.length - 1]
    }
    this.size = function () { 
        return items.length
    }
    this.clear = function() {
        items = []
    }
    this.isEmpty = function () {
        return items.length === 0
    }
    this.print = function() {
        console.log(items.toString())
    }
}

let stack = new Stack();
console.log(stack.isEmpty())
stack.push(8);
stack.push(3);
stack.print();
stack.size();
console.log(stack.peek());
console.log(stack.pop());
