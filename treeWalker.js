/**
 * 树结构的遍历
 * @param {*} nodeList 节点数组 
 * @param {*} callback 遍历的回调 传入：节点，节点索引，父节点数组，控制器
 * @param {*} parent 各级父节点
 * @param {*} ctrl 控制器
 */
function walk(nodeList, callback, parent = [], ctrl = { stop: false}) {
    if (Array.isArray(nodeList)) {
        for (let i = 0, len = nodeList.length; i  < len; i++) {
            callback(nodeList[i], i, parent, ctrl)
            if (!ctrl.stop) {
                const children = nodeList[i].children || nodeList[i].items
                const node = nodeList[i]
                parent.push(node)
                if (children && children.length) {
                    walk(children, callback, [...parent], ctrl)
                }
                parent.pop()
            } else {
                break;
            }
        }
    }
}