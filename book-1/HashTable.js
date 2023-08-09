
/**
 * 散列算法的作用是尽可能快地在数据结构中找到一个值
 */

function HashTable() {
    let table = []
    // 创建散列函数
    let loseloseHashTable = function(key) {
        if (!key) {throw new Error('require a argument')}
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37
    }
    // 更好的散列函数
    let djb2 = function(key) {
        var hash = 5381;
        for (let i = 0; i < key.length; i ++) {
            hash = hash * 33 + key.charCodeAt(i)
        }
        return hash % 1013
    }
    this.put = function(key, value) {
        var position = loseloseHashTable(key);
        console.log(position + '-' + key);
        table[position] = value
    }
    this.get = function(key) {
        return table[loseloseHashTable(key)]
    }
    this.remove = function(key) {
        table[loseloseHashTable(key)] = undefined
    }
    this.print = function() {
        for (var i = 0; i < table.length; i++) {
            if (table[i] !== undefined) {
                console.log(i + ': ' + table[i])
            }
        }
    }
    // 解决冲突的一种方式 -- 分离链接
    this.put = function(key, value) {
        var position = loseloseHashTable(key);
        if (table[position] == undefined) {
            table[position] = new LinkList()
        }
        table[position].append(new ValuePair(key, value))
    }
    this.getT = function(key) {
        var position = loseloseHashTable(key);
        if (table[position] !== undefined) {
            var current = table[position].getHead();
            while(current.next) {
                if (current.element.key  === key) {
                    return current.element.value
                }
                current = current.next
            }
            if (current.element.key === key) {
                return current.element.value
            }
        }
        return undefined
    }
    this.removeT = function(key) {
        var position = loseloseHashTable(key);
        if (table[position] !== undefined) {
            var current = table[position].getHead();
            while(current.next) {
                if (current.element.key === key) {
                    table[position].remove(current.element);
                    if (table[position].isEmpty()) {
                        table[position] = undefined
                    }
                    return true
                }
                current = current.next
            }
            if (current.element.key === key) {
                table[position].remove(current.element);
                if (table[position].isEmpty()) {
                    table[position] = undefined
                }
                return true
            }
        }
        return false
    }

    // 线性查探
    this.linePut = function(key, value) {
        var position = loseloseHashTable(key);
        if (table[position] == undefined) {
            table[position] = new ValuePair(key, value);
        } else {
            var index = ++position;
            while(table[position] != undefined) {
                index++
            }
            table[index] = new ValuePair(key, value)
        }
    }
    this.lineGet = function(key) {
        var position = loseloseHashTable(key);
        if (table[position] !== undefined) {
            return table[position].value;
        } else {
            var index = ++position;
            while(table[position] == undefined || table[index].key !== key) {
                index++
            }
            if (table[index].key === key) {
                return table[index].value
            }
        }
        return undefined
    }
    this.lineRemove = function(key) {
        var position = loseloseHashTable(key);
        if (table[position] !== undefined) {
            table[position] = undefined;
            return true
        } else {
            var index = ++position;
            while(table[position] == undefined || table[index].key !== key) {
                index++
            }
            if (table[index].key === key) {
                table[index] = undefined;
                return true
            }
        }
        return false
    }
}

// 解决散列的冲突
// ① 分离链接
var ValuePair = function(key, value) {
    this.key = key;
    this.value = value;
    this.toString = function() {
        return '[' + this.key + '-' + this.value + ']'
    }
}

// ② 线性查探
// 当想向表中某一个位置插入一个新元素时，如果索引为index的位置已经被占据
// 就尝试index+1的位置，如果index+1也被占据，就继续往下尝试。




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