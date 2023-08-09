function Queue (){
    
}
let items = []

this.enqueue = function (element) {
    items.push(element)
}
this.dequeue = function() {
    return items.shift()
}
this.front = function() {
    return items[0]
}
this.isEmpty = function() {
    return items.length === 0
}
this.clear = function () {
    items = []
}
this.size = function() {
    return items.length
}
this.print = function () {
    console.log(items.toString())
}
let Queue2 = (function() {
    const items = new WeakMap()
    class Queue {
        constructor() {
            items.set(this, [])
        }
        enqueue(element) {
            let q = items.get(this)
            q.push(element)
        }
        dequeue() {
            let q = items.get(this)
            return q.shift()
        }
        size() {
            let q = items.get(this)
            return q.length
        }
        isEmpty() {
            let q = items.get(this)
            return q.length === 0
        }
        clear() {
            items.set(this, [])
        }
    }
    return Queue
})()

// 优先队列
function PriorityQueue() {
    let items = []
    function QueueElement (element, priority) {
        this.element = element
        this.priority = priority
    }
    this.enqueue = function(element, priority) {
        let queueElement = new QueueElement(element, priority)
        let added = false
        for (let i = 0; i < items.length; i++) {
            if (queueElement.priority < items[i].priority) {
                items.splice(i,0,queueElement)
                added = true
                break
            }
        }
        if (!added) {
            items.push(queueElement)
        }
    }
    this.print = function() {
        for (let i =0; i < items.length; i ++) {
            console.log(`${items[i].element} - ${items[i].priority}`)
        }
    }
    this.dequeue = function () {
        return items.shift()
    }
    this.front = function() {
        return items[0]
    }
    this.size = function() {
        return items.length
    }
    this.clear = function() {
        item = []
    }
    this.isEmpty = function() {
        return items.length === 0
    }
}