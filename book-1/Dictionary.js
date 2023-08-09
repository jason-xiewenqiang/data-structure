/**
 * @description 创建字典
 * @this 映射
 */
function Dictionary() {
    var items = {}
    this.set = function(key, value) {
        items[key] = value
    }
    this.get = function(key) {
        if (this.has(key)) {
            return items[key]
        }
        return undefined
    }
    this.delete = function(key) {
        if (this.has(key)) {
            delete items[key]
            return true
        }
        return false
    }
    this.has = function(key) {
        return items.hasOwnProperty(key)
    }
    this.values = function() {
        var values = []
        for (var k in items) {
            if (this.has(k)) {
                values.push(items[k])
            }
        }
        return values
    }
    this.keys = function() {
        return Object.keys(items)
    }
    this.getItems = function() {
        return items
    }
}