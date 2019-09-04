### 数组
##### why array?
+ 几乎所有的语言都支持了数组，数组是最简单的内存数据结构
+ JavaScript中的数组可以存储任何类型的的值
###### 创建和初始化数组
+ 使用new关键字
```
    var dayOfWeek = new Array();
    var dayOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');

```

###### 数组的元素访问和数组长度
+ length 和数组下标访问元素

```
    for (var i = 0; i < dayOfWeek.length; i ++ ) {
        console.log(dayOfWeek[i]);
    }

    // 求斐波那契数列的前20个数字 已知第一个数是1，第二个是2，从第三项开始，每一项都是前两项的和

    var fibonacci = [];
    fibonacci[0] = 1;
    fibonacci[1] = 2;

    for (var i = 2; i <= 19; i++ ) {
        fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
    }

    for (let n = 0; n < fibonacci.length; n++) {
        console.log(fibonacci[n]);
    }

```

###### 数组操作方法
+ Array.push 向数组末尾添加任意个元素  lenght 增加
+ Array.unshift 向数组首部添加元素 length 增加
+ Array.pop 从数组末尾删除元素  length 变小
+ Array.shift 从数组首部删除 length 变小
+ Array.splice 任意位置添加或者删除元素 

```
    // splice方法 第一个参数 要删除的元素的索引（必填），第二个参数 删除元素的个数（如果不是删除则设置为0-选填），第三个参数 添加的元素项（选填）

    // 返回值是什么？ 返回操作产生的数组 原数组不变

    // example 1 --nothing change
    [1,2,3,4].splice()  // return [] -> origin = [1,2,3,4] 

    // example 2 --clear
    [1,2,3,4].splice(0, 4) // return [1,2,3,4] -> orign = [] splice内传入操作数组的长度，相当于拿出数组所有元素(原数组被清空)
    
    // example 3 --delete
    [1,2,3,4].splice(2,1) // return [4] -> origin = [1,2,3] 从下标为2开始删除 删除1项 返回删除的项，原数组变化

    // example 4 --and
    [1,2,3,4].splice(1, 0, 5,6,7) // return [] -> origin = [1,2,5,6,7,3,4] 返回[], 原数组变化

```

// 二维数组和三维（多维）数组不做讨论

###### JavaScript中数组其他的操作方法汇总
###### JavaScript中数组其他的操作方法汇总
+ concat
+ every
+ filter
+ some
+ forEach
+ join
+ indexof
+ lastIndexof
+ map
+ slice
+ reverse
+ sort
+ valueOf
+ toString
+ pop 
+ push
+ unshift
+ shift

###### ES6新增数组功能