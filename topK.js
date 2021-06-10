// 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素。
// 输入: [4,5,1,6,2,7,3,8] 和 k = 4
// 输出: 5
var findK = (arr, k) => Array.from(new Set(arr.sort((a,b)=>a-b)))[k]
console.log(findK([4,5,1,6,2,7,3,8,6,2,7,3,8], 4))