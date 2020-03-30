
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

    // 选择排序
    this.selectionSort = function() {
        var length = array.length, indexMin;
        for (var i = 0; i < length-1; i++) {
            indexMin = i;
            for (var y = i; y < length; y++) {
                if (array[indexMin] > array[y]) {
                    indexMin = y
                }
            }
            if (i !== indexMin) {
                swap(array, i, indexMin)
            }
        }
    }

    // 插入排序
    this.insertionSort = function() {
        var length = array.length, j, temp;
        for (var i = 1; i < length; i++) {
            j = i;
            temp = array[i];
            while (j>0 && array[j-1] > temp) {
                array[j] = array[j-1];
                j--;
            }
            array[j] = temp;
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


    // 并归排序
    this.mergeSort = function() {
        array = mergeSortRec(array)
    }

    var mergeSortRec = function(array) {
        var length = array.length;
        if (length === 1) {
            return array
        }
        var mid = Math.floor(length / 2);
        var left = array.slice(0, mid);
        var right = array.slice(mid, length);
        const res = merge(mergeSortRec(left), mergeSortRec(right))
        console.log('merge result', res)
        return res
    }

    var merge = function(left, right) {
        console.log('left', left)
        console.log('right', right)
        var result = [];
        var iLeft = 0, iRight = 0;
        while(iLeft < left.length && iRight < right.length) {
            if (left[iLeft] < right[iRight]) {
                result.push(left[iLeft])
                iLeft++
            } else {
                result.push(right[iRight])
                iRight++
            }
        }
        while(iLeft < left.length) {
            result.push(left[iLeft])
            iLeft++
        }
        while(iRight < right.length) {
            result.push(right[iRight])
            iRight++
        }
        return result
    }

    // 快速排序
    this.quickSort = function() {
        quick(array, 0, array.length - 1)
    }

    var quick = function(array, left, right) {
        var index;
        if (array.length > 1) {
            index = partition(array, left, right)
            if (left > index - 1) {
                quick(array, left, index -1)
            }
            if (index < right) {
                quick(array, index, right)
            }
        }
    }

    var partition = function(array, left, right) {
        var pivot = array[Math.floor((right + left) / 2)]; // 主元
        var i = left;
        var j = right;
        while(i <= j) {
            while(array[i] < pivot) {
                i++
            }
            while(array[j] > pivot) {
                j--;
            }
            if (i <= j) {
                swap(array, i, j);
                i++;
                j--;
            }
        }
        console.log('指针', i)
        return i
    }

    // 搜索算法
    this.sequentialSearch = function(item) {
        for (var i = 0; i < array.length; i++) {
            if (item === array[i]) {
                return i
            }
        }
        return -1
    }

    // 二分搜索
    this.binarySearch = function(item) {
        this.quickSort();
        var low = 0, high = array.length - 1, mid, element;
        while(low <= high) {
            mid = Math.floor((low + high) / 2);
            element = array[i]
            if (element < item) {
                low = mid + 1;
            } else if(element > item) {
                high = mid -1;
            } else {
                return mid
            }
        }
        return -1
    }

}

function createNotSortedArray(size) {
    var array = new ArrayList();
    for (var i = size; i > 0; i--) {
        array.insert(i)
    }
    return array;
}
console.time('array 1')
var array = createNotSortedArray(10);
console.log(array.toString());
array.bubbleSort();
console.log('sorted', array.toString());
console.timeEnd('array 1')

console.log('-----------------')
console.time('array 2')
var array2 = createNotSortedArray(10);
console.log(array2.toString());
array2.modifiedBubbleSort();
console.log('sorted', array2.toString());
console.timeEnd('array 2')

console.log('-----------------')
console.time('array 3')
var array3 = createNotSortedArray(10);
console.log(array3.toString());
array3.selectionSort();
console.log('sorted', array3.toString());
console.timeEnd('array 3')


console.log('-----------------')
console.time('array 4')
var array4 = createNotSortedArray(10);
console.log(array4.toString());
array4.insertionSort();
console.log('sorted', array4.toString());
console.timeEnd('array 4')

console.log('-----------------')
console.time('array 5')
var array5 = createNotSortedArray(10);
console.log(array5.toString());
array5.mergeSort();
console.log('sorted', array5.toString());
console.timeEnd('array 5')

console.log('-----------------')
console.time('array 6')
var array6 = createNotSortedArray(10);
console.log(array6.toString());
array6.quickSort();
console.log('sorted', array6.toString());
console.timeEnd('array 6')

