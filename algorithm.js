
/**
 *  js 排序和搜索算法
 * 常用的排序算法 冒泡算法、选择算法、插入算法、并归算法、快速排序、堆算法、
 * 顺序搜索 和 二分搜索
 */
function ArrayList() {
    var array = [];
    this.insert  = function(element) {
        array.push(element);
    } 
    this.toString = function() {
        return array.join();
    }
    // 冒泡排序 从运行时间上看 冒泡排序是最差的一个。 比较任何相邻的两项，如果第一个比第二个大，则交换两项
    this.bubbleSort = function() {
        var length = array.length;
        for (var i = 0; i < length; i++) {
            for (var y = 0; y < length - 1; y++) {
                if (array[y] > array[y + 1]) {
                    swap(array, y, y+1)
                }
            }
        }
    }

    // 针对冒泡排序的改进  如果从内循环减去外循环一跑过的轮数，就可以避免内循环中不必要的比较
    this.modifiedBubbleSort = function() {
        var length = array.length;
        for (var i = 0; i < length; i++) {
            for (var y = 0; y < length - 1 - i; y++) {
                if(array[y] > array[y + 1]) {
                    swap(array, y, y + 1);
                }
            }
        }
    }
    
    // 交换函数
    var swap = function(array, index1, index2) {
        var aux = array[index1];
        array[index1] = array[index2];
        array[index2] = aux;
        // es6交换的方式 ---增强的对象属性
        // [array[index1], array[index2]] = [array[index2], array[index1]]
    }

}

function createNonSortedArray(size) {
    var array = new ArrayList();
    for (var i = size; i > 0; i--) {
        array.insert(i)
    }
    return array;
}
console.time('array 1')
var array = createNonSortedArray(10);
console.log(array.toString());
array.bubbleSort();
console.log('sorted', array.toString());
console.timeEnd('array 1')

console.log('-----------------')
console.time('array 2')
var array2 = createNonSortedArray(10);
console.log(array2.toString());
array2.modifiedBubbleSort();
console.log('sorted', array2.toString());
console.timeEnd('array 2')
