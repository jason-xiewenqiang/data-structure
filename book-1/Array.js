
/** 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let ans = nums[0]
    let sum = 0
    for (let num of nums) {
        if (sum > 0) {
            sum += num
        } else {
            sum = num
        }
        ans = Math.max(ans, sum)
    }
    return ans
};

/**
 * @param {number[]} nums
 * @return {number}
 */
//  给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

//  你可以假设数组是非空的，并且给定的数组总是存在多数元素。
var majorityElement = function(nums) {
    
};

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
//  给你一幅由 N × N 矩阵表示的图像，其中每个像素的大小为 4 字节。请你设计一种算法，将图像旋转 90 度。
//  不占用额外内存空间能否做到？

var a = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];   // 3*3
//   a[2][2] => b[2][0]
//   a[1][2] => b[2][1]
//   
//   
var b = [
    [7,4,1],
    [8,5,2],
    [9,6,3]
];

var rotate = function(matrix) {
    let n = matrix.length;
    let tem = new Array(n).fill(0).map(_ => new Array(n).fill(0))
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            tem[j][n-i-1] = matrix[i][j]
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            matrix[i][j] = tem[i][j]
        }
    }
};

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    let len = s.length
    for (let i = 0; i < len/2; i++) {
        [s[i], s[len-i-1]] = [s[len-i-1], s[i]]
    }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {

};

/** 零矩阵
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let row = {}
    let col = {}
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j]===0) {
                row[i] = 1;
                col[j] = 1;
            }
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (row[i] || col[j]) {
                matrix[i][j] = 0
            }
        }
    }
};

/** 多数元素 array
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    const numsMap = {}
    nums.sort((a,b)=>a-b).forEach(num => {
        if (Reflect.has(numsMap, num+'')) {
            numsMap[num+''] += 1
        } else {
            numsMap[num+''] = 1
        }
    })
    return Object.keys(numsMap).filter(k=> numsMap[k] === Object.values(numsMap).sort((a,b)=>a-b)[0])[0]
};


/** 给定一个含有 M x N 个元素的矩阵（M 行，N 列），请以对角线遍历的顺序返回这个矩阵中的所有元素
 * @param {number[][]} mat
 * @return {number[]} 对角线遍历
 */
 var findDiagonalOrder = function(mat) {

};