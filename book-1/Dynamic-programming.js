// Dynamic programming  simple
 
/** 爬楼梯
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    if (n<= 2) {
        return n
    }
    let first = 1;
    let second = 2;
    let sum = 0;
    while (n > 2) {
        sum = first+second
        first=second
        second=sum
        n--
    }
    return sum
};

/** 买卖股票最佳时机
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    
};

/** 最大利润
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let max = 0
    let s = 0
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < prices[s]) {
            s = i
        }
        max = Math.max(max, prices[i] - prices[s])
    }
    return max
};


/** 最大连续子序和
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    if (nums.length === 1) return nums[0]

};

/** 打家劫舍
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    if (nums.length === 0) return 0
    if (nums.length === 1) return nums[0]
    if (nums.length === 2) return Math.max(nums[0], nums[1])



};