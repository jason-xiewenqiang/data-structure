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
  
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null
    let aSize = 0;
    let bSize = 0;
    let q = headA;
    let p = headB;
    let tem;
    let itm;
    while(q) {
        aSize+=1
        q = q.next;
    }
    while(p) {
        bSize+=1
        p = p.next;
    }
    if (aSize > bSize) {
        let bet = aSize - bSize;
        tem = headA
        while(bet > 0) {
            bet--
            tem = tem.next
        }
        itm = headB;
    } else if (aSize <= bSize){
        let bet = bSize - aSize;
        tem = headB
        while(bet > 0) {
            bet--
            tem = tem.next
        }
        itm = headA;
    }
    while(tem) {
        if (tem === itm) {
            return itm
        } else {
            tem = tem.next
            itm = itm.next
        }
    }
    return null
}; 


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
    if (!head) return head
    let dym = new ListNode(val+1, head); //不让其与val相等就行了
    p = dym
    while(p && p.next) {
        if (p.next.val === val) {
            p.next = p.next.next
        } else {
            p = p.next
        }
    }
    return dym.next
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    if (!head) return head
    let prev = null
    let curr = head
    while(curr) {
        const next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/** 只有一个值是 和  val相同的
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var deleteNode = function(head, val) {
    if(head.val == val){
        return head.next
    }
    head.next = deleteNode(head.next,val);
    return head
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var sortList = function(head) {
    if (!head || !head.next) return head
    let arr = []
    let p = head
    while(p) {
        arr.push(p)
        p = p.next
    }
    arr = arr.sort((a, b) => a.val - b.val)
    let dym = new ListNode(0, null)
    p = dym
    arr.forEach(node => {
        let t = new ListNode(node.val, null)
        p.next = t
        p = t
    })
    return dym.next
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node 提议就是让你做删除节点的方式
 * @return {void} Do not return anything, modify node in-place instead.
 */
 var deleteNode = function(node) {
    node.val = node.next.val
    next.next = node.next.next  
};