/**
 * @description 链表 -- 单向
 */
function LinkList() {
    let Node = function (element) {
        this.element = element
        this.next = null
    }
    let length = 0
    let head = null

    // 向链表尾部添加元素
    this.append = function (element) {
        let node = new Node(element)
        let current
        if (head == null) {
            head = node
        } else {
            current = head
            while (current.next) { // 循环找到最后一项
                current = current.next
            }
            current.next = node // 将next设置为node建立链接
        }
        length++
    }

    this.insert = function (position, element) {
        // 检查越界
        if (position >= 0 && position <= length) {
            let node = new Node(element)
            let current = head
            let previous
            let index = 0
            if (position === 0) {
                node.next = current
                head = node
            } else {
                while(index++ < position) {
                    previous = current
                    current = current.next
                }
                node.next = current
                previous.next = node
            }
            length++
            return true
        } else {
            return false
        }
    }
    this.removeAt = function (position) {
        if (position > -1 && position < length) { // 检查越界
            let current = head
            let previous
            let index = 0
            // 当 position == 0
            if (position == 0) {
                head = current.next
            } else {
                while(index++ < position) {
                    previous = current
                    current = current.next
                }
                previous.next = current.next
            }   
            length--
            return current.element
        } else {
            return null
        }
    }
    this.indexOf = function () {
        let current = head
        let index = 0
        while(current) {
            if (element === current.element) {
                return index
            }
            index++
            current = current.next
        }
        return -1
    }
    this.isEmpty = function () {
        return length === 0
    }
    this.size = function () {
        return length
    }
    this.getHead = function () {
        return head
    }
    this.toString = function () {
        let current = head
        let string = ''
        while(current) {
            string += current.element + (current.next ? 'n' : '')
            current = current.next
        }
        return string
    }
}

/*  双向链表  */
function DoublyLinkedList() {
    let Node = function(element) {
        this.element = element
        this.next = null
        this.prev = null
    }
    let length = 0
    let head = null // 列表第一项的引用
    let tail = null  // 列表最后一项的引用
    this.insert = function(element) {
        // 检查越界
        if (position >= 0 && position <= length) {
            let node = new Node(element)
            let current = head
            let previous
            let index = 0
            if (position === 0) {
                if (!head) {
                    head = node
                    tail = node
                } else {
                    node.next = current
                    current.prev = node
                    head = node
                }
            } else if (position === length) {
                current = tail
                current.next = node
                node.prev = current
                tail = node
            } else {
                while(index++ < position) {
                    previous = current
                    current = current.next
                }
                node.next = current
                previous.next = node

                current.prev = node
                node.prev = previous
            }
            length++
            return true
        } else {
            return false
        }
    }
    this.removeAt = function(position) {
        // 检查越界
        if (position >= 0 && position <= length) {
            let current = head
            let previous
            let index = 0
            if (position === 0) {
                head = current.next
                if (length === 1) {
                    tail = null
                } else {
                    head.prev = null
                }
            } else if (position === length -1) {
                current = tail
                tail = current.prev
                tail.next = null
            } else {
                while(index++ < position) {
                    previous = current
                    current = current.next
                }
                previous.next = current.next
                current.next.prev = previous
            }
            length--
            return current.element
        } else {
            return null
        }
    }
}
