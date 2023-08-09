// 斐波那契数
function fibonacci(num) {
    if (num === 1 || num === 2) {
        return 1
    }
    return fibonacci(num -1) + fibonacci(num -2)
}

// 非递归的方式 实现斐波那契
function fib(num) {
    var n1 = 1, n2 = 2, n = 1;
    for (var i = 3; i <= num; i++) {
        n = n1 + n2;
        n1 = n2;
        n2 = n;
    }
    return n
}

// 动态规划 Dynamic Programming
// 美国有一下面额的硬币 ： d1 = 1 , d2 = 5 , d3 = 10 , d4 = 25
// 如果要找36美分的零钱 我们可以使用 1个 25美分 1个 10美分 和 1个便士
// 如何将这个转换为javascript计算
function MinCoinChange(coins) {
     var coins = coins;
     var cache = {};
     this.makeChange = function(amount) {
        var me = this;
        if (!amount) { return [] }
        if (caches[amount]) { return caches[amount] }
        var min = []; 
        var newMin;
        var newAmount;
        for (var i = 0; i < coins.length; i++) {
            var coin = coins[i];
            newAmount = amount - coin;
            if (newAmount > 0) {
                newMin = me.makeChange(newAmount);
            }
            if (newAmount >= 0 && (newMin.length < min.length-1 || !min.length) && (newMin.length || !newAmount) ) {
                min = [coin].concat(newMin)
                console.log('new Min' + min + 'for ' + amount)
            }
        }
        return (caches[amount] = min)
     }
}
