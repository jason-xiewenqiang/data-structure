/**
 * @description 集合是由一组无序且唯一（即不能重复）的项组成的
 */
function Set() {
    let items = {}

    this.has = function(value) {
        return items.hasOwnProperty(value)
    }
    this.remove = function(value) {
        if (this.has(value)) {
            delete items[value]
            return true
        }
        return false
    }
    this.add = function(value) {
        if (!this.has(value)) {
            items[value] = value
            return true
        }
        return false
    }
    this.clear = function() {
        items = {}
    }
    this.size = function() { 
        // return Object.keys(items).length 某些浏览器不太支持 Object.keys
        let count = 0
        for(let key in items) {
            if (items.hasOwnProperty(key)) {
                ++count
            }
        }
        return count 
    }
    this.values = function() {
        // let values = []
        // for (let i = 0, keys = Object.keys(items); i < keys.length; i++) { 某些浏览器不太支持 Object.keys
        //     values.push(keys[i])
        // }
        // return values
        let values = []
        for (let key in items) {
            if (items.hasOwnProperty(key)) {
                values.push(items[key])
            }
        }
        return values
    }
    // 求其并集
    this.union = function(otherSet) {
        let unionSet = new Set()

        let values = this.values()
        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i])
        }
        values = otherSet.values()
        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i])
        }
        return unionSet
    }
    // 交集
    this.intersection = function(otherSet) {
        let intersectionSet = new Set()
        let values = this.values()
        for (let i = 0; i < values.length; i ++) {
            if (otherSet.has(values[i])) {
                intersectionSet.add(values[i])
            }
        }
        return intersectionSet
    }
    // 差集
    this.difference = function(otherSet) {
        let differenceSet = new Set()
        let values = this.values()
        for (let i = 0; i < values.length; i++) {
            if(!otherSet.has(values[i])) {
                differenceSet.add(values[i])
            }
        }
        return differenceSet
    }
    // 子集
    this.subset = function(otherSet) {
        if (this.size() > otherSet.size()) {
            return false
        } else {
            let values = this.values()
            for (let i = 0; i < values.length; i++) {
                if (!otherSet.has(values[i])) {
                    return false
                }
            }
            return true
        }
    }
}



