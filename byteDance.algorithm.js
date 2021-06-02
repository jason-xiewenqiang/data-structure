/** https://leetcode-cn.com/problems/longest-common-prefix/
 * @param {string[]} strs
 * @return {string}  找最长和最短的有bug
 */
 var longestCommonPrefix = function(strs) {
    if (!strs) return ''
    if (strs.length === 1) return strs[0]
    
    // 获取最长的 最短的 最终会找到公共的
    let minStr = ''
    let maxStr = ''
    for (let i = 0; i < strs.length; i++) {
        if (i===0) {
            minStr = strs[i]
            maxStr = strs[i]
        } else {
            if (minStr.length > strs[i].length) {
                minStr = strs[i]
            }
            if (maxStr.length < strs[i].length) {
                maxStr = strs[i]
            }
        }
    }
    console.log(minStr, maxStr)
    let target = ''
    for (let i = 0; i < minStr.length; i++) {
        if (minStr.substr(i,1) === maxStr.substr(i,1)) {
            target+=minStr.substr(i,1)
        } else {
            break
        }
    }
    return target
};
longestCommonPrefix(["flower","flow","flight"])

/**
 * 分治思想
 * @param {*} strs 
 * @return {string}
 * 将这些 strs 两两细分下去 正确
 */
var longestCommonPrefix1 = function(strs) {
    if (!strs || strs.length === 0) return ''
    return lCp(strs)
}
var lCp = function(arc) {
    let len = arc.length;
    if (len === 1) return arc[0]
    const mid = Math.floor(arc.length / 2)
    const left = arc.slice(0,mid)
    const right = arc.slice(mid,len);
    return lcpTwo(lCp(left), lCp(right))
}
var lcpTwo = function(str1, str2) {
    let j = 0;
    for (;j<str1.length&&j<str2.length;j++) {
        if (str1.charAt(j) !== str2.charAt(j)) {
            break
        }
    }
    return str1.substr(0,j)
}
longestCommonPrefix1(["flower","flow","flight"])



/** https://leetcode-cn.com/problems/reverse-words-in-a-string/submissions/
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    // 1 使用一下字符串切分
    if (!s) return ''
    // return s.trim().split(/\s/g).reverse().map(str=>str.trim()).join(' ')
    let str = s.trim()
    const arr = [];
    let word = ''
    for (let i = 0; i < str.length+1; i++) {
        if (/[^\s]/g.test(str.charAt(i))) {
            word+=str.charAt(i)
        } else if (word) {
            arr.push(word)
            word = ''
        }
    }
    if (word) {
        arr.push(word)
    }
    return arr.reverse().join(' ')
};

reverseWords('a good  example');


/** https://leetcode-cn.com/leetbook/read/array-and-string/yf47s/
 * @param {number[]} nums [1, 7, 3, 6, 5, 6]
 * @return {number} 
 */
 var pivotIndex = function(nums) {
    const sum = nums.reduce((total, current) => {
        return total+=current
    }, 0)
    if (sum - nums[0] === 0) return 0
    let temp = 0;
    let i = 0;
    let res = -1;
    for (; i < nums.length; i++) {
        temp+=nums[i]
        if (temp === (sum - nums[i+1]) / 2) {
            res = i+1
            break
        }
    }
    return res
};

pivotIndex([1, 7, 3, 6, 5, 6])


