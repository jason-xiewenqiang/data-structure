// 正则表达式 ： 要么匹配字符 要么匹配位置
// Base =========== 字符匹配 ===========
/**
 * 两种模糊匹配
 * 1、横向模糊和纵向模糊
 * 横向模糊：一个正则可匹配的字符串长度不是固定的 例如-> regex = /ab{2,5}c/g
 * 纵向模糊：一个正则匹配字符串，具体到某一个字符时，它可以不是某一个确定的字符 例如：/a[123]b/ => 可以是 a1b a2b a3b
 */

var regex1 = /ab{2,5}c/g
var string1 = 'abc abbc abbbc abbbbc abbbbbbbc'
console.log(string1.match(regex1)) // ["abbc", "abbbc", "abbbbc"]

/**
 * 2 字符组
 * 表示范围 使用 - 进行  简写时，连接范围，而要匹配 - 时， 将 - 放在开头或者结尾 或 进行转义
 * [ab-] or [-ab] or [a\-b]
 */
var regex2 = /[1-6a-zG-M]/

/**
 * 排除字符组
 * 就是反字符组  不能为 xxx 例如： [^abc] 表示不可是abc
 */
var regex3 = /[^abcd]/

/**
 * 常见的字符组 
 * \d 表示 [0-9]
 * \D 表示 [^0-9]
 * \w 表示 [0-9a-zA-Z_] 单词字符
 * \W 表示 [^0-9a-zA-Z_] 非单词字符
 * \s 表示 [ \t\v\n\r\f] 空白符 水平指标符 垂直制表符 换行符 回车符 换页符
 * \S 表示 [^ \t\v\n\r\f] 非空白符
 * . 表示 [^\n\r\u2028\u2029] 通配符 表示几乎任意字符
 */
// 如果要匹配任意字符该怎么办 可以使用 [\d\D]、[\w\W]、[\s\S]、[^] 中的任意一个

/**
 * 3. 量词
 * 量词：
 *  {m,}  至少出现 m次
 *  {m} = {m,m} 出现 m 次
 *  ? = {0, 1} 表示 出现或者不出现
 *  + = {1, } 表示 至少出现一次
 *  * = {0, } 表示出现任意次 也可能不出现 
 */

// 贪婪匹配和惰性匹配
var regex4 = /\d{2,5}/g; // 尽可能的多去匹配 ** 贪婪 **
var string2 = '123 1234 12345 123456';
console.log(string2.match(regex4)) // => ['123', '1234', '12345'] 

var regex5 = /\d{2,5}?/g; // 当两个能满足时 就不会再继续尝试了 ** 惰性 ** 
var string5 = '123 1234 12345 123456';
console.log(string5.match(regex5)) // => ['12', '12', '34', '12', '34', '12', '34', '56']

// 在量词后面加一个 ? 问号 就能实现惰性匹配 尽量可能少的 匹配
/**
 *  惰性           贪婪
 *  {m,n}?         {m,n}
 *  {m,}?          {m,}
 *  ??             ?
 *  +?             +
 *  *?             *
 */

/**
 * 多选分支
 * 表现形式如下：（p1|p2|p3）中间使用 | 管道符分隔开
 * 分支结构是惰性的 如果前面的匹配上了 后面的就不会尝试了
 */
const regex6 = /good|nice/g;
const string6 = 'good bad, nice try';
console.log(string6.match(regex6)); // => ['good', 'nice]

// 演示分支惰性匹配

const regex7 = /goodbye|good/g
const string7 = 'goodbye';
console.log(string7.match(regex7)); // => ['goodbye']

/**
 * 一波 实战
 */

// 1、匹配16进制颜色
// 要求命中 #ffbbab #Fc01DF #FFF #ffE
const regexColor = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g
const stringColor = '#ffbbab #Fc01DF #FFF #ffE'
console.log(stringColor.match(regexColor)) // => ["#ffbbab", "#Fc01DF", "#FFF", "#ffE"] 

// 2、匹配时间 24小时为例
// 要求命中 23:59 02:07
const regexTime = /([2][0-3]|[01][0-9]):([0-5][0-9])/g;
const stringTime = '23:59 02:07';
console.log(stringTime.match(regexTime)) // ['23:59', '02:07']

// 3、window操作 系统的文件路径
// 要求 匹配 F:\study\javascript\regex\regular expression.pdf
// F:\study\javascript\regex\regular expression.pdf
// F:\study\javascript\regex\
// F:\study\javascript
// F:\

const regexFilePath = /^[a-zA-Z]:\\([^\\:*<>|"?\r\n/]+\\)*([^\\:*<>|"?\r\n/])?+/g;
const stringFilePath = "F:\\study\\javascript\\regex\\";
console.log(stringFilePath.test(regexFilePath)); // true

// 4、匹配 html标签 的 id
// 要求 在 <div id="container" class="container"></div> 提取出 id="container"
const regexId = /id=".*?"/  // => 回溯 /id="[^"]*"/
const regexHtml = '<div id="container" class="container"></div>'

// Base =========== 字符匹配 end ===========


// Base =========== 位置匹配 ===========


// !!! 正则表达式是匹配模式 ， 要么匹配字符 要么匹配位置 !!!

// 位置就是相邻字符之间的位置
/**
 * 匹配位置 !!! 位置是可以替换成字符的  tip: g 表示全局匹配  m 表示多行匹配
 * 在 ES5 中有 6 个锚 ：^ $ \b \B (?=p) (?!p)
 * ^ 匹配开头 在多行匹配行开头
 * $ 匹配结尾 在多行匹配行结尾
 * \b 单词边界 => \w 与 \W 之间的位置 or \w 与 ^ 之间 or \w 与 $ 之间  \w = [0-9a-zA-Z_]
 * \B 非单词边界
 * (?=p) p是一个字串 即p前面的位置
 * (?!p) 与 (?=p) 相反的位置 
 */

var result = 'hello'.replace(/^|$/g, '#'); // => '#hello#'
var result = 'I\nlike\njavascript'.replace(/^|$/gm, '#');
/*
#I#
#like#
#javascript#
*/
var result = '[js] lesson_01.mp4'.replace(/\b/g, '#'); // => '[#js#] #lesson_01#.#mp4#'
var result  = '[js] lesson_01.mp4'.replace(/\B/g, '#'); // => '#[j#s]# l#e#s#s#o#n#_#1.m#p#4'
// (?=p)
var result = 'hello'.replace(/(?=l)/g, '#'); // => he#l#lo
var result = 'hello'.replace(/(!=l)/g, '#'); // => #h#ell#o#

/**
 * 位置的特征 对于位置的理解 可以理解成 ''
 * 例如 hello = '' + 'h' + '' + 'e' + '' + 'l' + '' + 'l' + '' + 'e' + ''
 */

// 不匹配任何东西 /.^/ 正则要求匹配一个字符 但该字符的后面是开头 这样的字符串是不存在的

// 数字千分位分割符
 var result = '123456789'.replace(/(?=\d{3}$)/g, ',');  //  '123456,789' 单个
 var result = '123456789'.replace(/(?=(\d{3})+$)/g, ',');  //  ',123,456,789' 多个
 var result = '123456789'.replace(/(?!^)(?=(\d{3})+$)/g, ',');  //  '123,456,789' 去掉开头的逗号
 var result = '12345678 123456789'.replace(/(?!\b)(?=(\d{3})+\b)/g, ',');  //  '12,345,678 123,456,789' 多中形式
 var result = '12345678 123456789'.replace(/\B(?=(\d{3})+\b)/g, ',');  //  '12,345,678 123,456,789' 多中形式

//  格式化
// 货币格式化 1200 => ￥ 1200.00
var result = Number(1200).toFixed(2).replace(/\B(?=(\d{3})+\b)/g, ',').replace(/^/, '￥ ') 
function formatRNB(num) {
    return Number(num).toFixed(2).replace(/\B(?=(\d{3})+\b)/g, ',').replace(/^/, '￥ ');
}

// 验证密码问题
// rule: password => length 6-12, includes Number StringUpperCase StringLowerCase, at lest 2 types of it

function validPassword(psw) {
    const regex = /((?=.*[0-9])(?=.*[a-z])|(?=.*[0-9])(?=.*[A-z])|(?=.*[A-Z])(?=.*[a-z]))^[0-9a-zA-Z]{6,12}$/;
    return regex.test(psw);
}

console.log(validPassword('1234'))
console.log(validPassword('123412344534543534'))
console.log(validPassword('12345678'))
console.log(validPassword('fdsfsdsf'))
console.log(validPassword('FADSFDFAD'))
console.log(validPassword('1234DF5678'))
console.log(validPassword('1234df5678'))
console.log(validPassword('FdsfFDF'))

// 反向验证 不可以是全部为数字 不可以全部为小写字母 也不可以全部为大写字母 使用 (?!p) 

function validPassword2(psw) {
    const regex = /(?!^[0-9]{6-12}$)(?!^[a-z]{6,12}$)(?!^[A-Z]{6,12}$)^[0-9a-zA-Z]{6,12}$/;
    return regex.test(psw);
}

console.log(validPassword('1234'))
console.log(validPassword('123412344534543534'))
console.log(validPassword('12345678'))
console.log(validPassword('fdsfsdsf'))
console.log(validPassword('FADSFDFAD'))
console.log(validPassword('1234DF5678'))
console.log(validPassword('1234df5678'))
console.log(validPassword('FdsfFDF'))

/**
 * 括号 ：正则表达式括号的作用  括号 提供了分组 -- 便于我们引用它
 */

// 1、分组 连续匹配ab时  需要用到分组 如：/(ab)+/ 提供了分组 + 作用于 ab 这个整体
var regex = /(ab)+/g
var string1 = 'ababa abbb abababa'
console.log(string1.match(regex)) // => ['abab', 'ab', 'ababab']

// 分支结构 在多选的分支结构 (p1|p2) 提供了分支表达式的所有可能
// I love Javascript
// I love Regular Expression

var regex = /^I love (Javascript|Regular Expression)$/
console.log(regex.test('I love Javascript')) // true
console.log(regex.test('I love Regular Expression')) // true

//  分组引用 可以对分组进行数据提取
// 以日期为例 yyyy-mm-dd

var regex = /\d{4}-\d{2}-\d{2}/;
var regex = /(\d{4})-(\d{2})-(\d{2})/;

// 提取 年 月 日
var string = '2021-05-27'
console.log(string.match(regex))
// => ["2021-05-27", "2021", "05", "27", index: 0, input: "2021-05-27", groups: undefined]

// 使用 $1 - $9 来获取
regex.test(string);

RegExp.$1 // 2021
RegExp.$2 // 05
RegExp.$3 // 27

// 替换 yyyy-mm-dd 替换 mm/dd/yyy
var regex = /(\d{4})-(\d{2})-(\d{2})/;
var string = '2021-05-27';
console.log(string.replace(regex, '$2/$3/$1'))
// =>  05/27/2021
// 这样的做法等于 
var result = string.replace(regex, () => `${RegExp.$2}/${RegExp.$3}/${RegExp.$1}`)
// =>  05/27/2021
// 这样的做法也等于 
var result = string.replace(regex, (match, year, month, day) => `${month}/${day}/${year}`)
// =>  05/27/2021


// !!! 反向引用
//  2021-5-27
//  2021/5/27
//  2021.5.27
// 要求正则能符合三种格式
var regex = /\d{4}(-|\/|\.)\d{2}(-|\/|\.)\d{2}/;
var string1 = '2021-05-27'
var string3 = '2021/05/27'
var string4 = '2021.05.27'
var string5 = '2021/05-27'
console.log(regex.test(string1)) // true
console.log(regex.test(string3)) // true
console.log(regex.test(string4)) // true
console.log(regex.test(string5)) // true  ====> 不符合预期

// *** 要求 要分割符一致  修改正则表达式  \1  === (\.|\/|-) 反向引用

var rightRegex = /\d{4}(\.|\/|-)\d{2}\1\d{2}/
var string1 = '2021-05-27'
var string3 = '2021/05/27'
var string4 = '2021.05.27'
var string5 = '2021/05-27'
console.log(rightRegex.test(string1)) // true
console.log(rightRegex.test(string3)) // true
console.log(rightRegex.test(string4)) // true
console.log(rightRegex.test(string5)) // false  ====> 符合预期

// !!! 括号嵌套怎么办  ? 以左括号为例
var regex = /^((\d)(\d(\d)))\1\2\3\4$/
var string = '1231231233'

regex.test(string) // true
RegExp.$1 // 123
RegExp.$2 // 1
RegExp.$3 // 23
RegExp.$4 // 3

// *** \10 是表示 第十个分组 . 若引用了不存在的分组不同的浏览器表现是不一样的
// 要匹配 \1 和 0  的话 可以使用 (?:\1)0 ro \1(/:0)

// !!! 分组后面如果有量词的话会如何呢?  分组最终捕获到的数据是最后一次的匹配
var regex = /(\d)+/
var string = '12345'
console.log(string.match(regex)) // => ['12345', '5', index: 0, input: '12345'] 这儿捕获的是 5
// 对于反向引用 也是一样的
var regex = /(\d)+ \1/
console.log(regex.test('12345 1')) // false 
console.log(regex.test('12345 1')) // true

// *** 非捕获括号  (?:p) 和 (?:p1|p2|p3)
var regex = /^I love (?:Javascript|Regular Expression)$/
console.log(regex.test('I love Javascript'))
console.log(regex.test('I love Regular Expression'))


/**
 * 括号 --- 分组案例
 */
// trim 模拟
function trim(str) { // 使用字符匹配进行替换 效率高
    var regex = /^\s+|\s+$/g
    return str.replace(regex, '')
}
function trim1(str) { // 使用引用提取数据
    var regex = /^\s*(.*?)\s*$/g
    return str.replace(regex, '$1')
}
// 将一句话中每个单词的首字母转换为大写字母
function myToUpperCase(sentence) {
    return sentence.toLowerCase().replace(/(?:^|\s)\w{1}/g, c=>c.toUpperCase())
}
// 驼峰化 blue_sky => blueSky
function camelize(str) {
    return str.replace(/[-_\s]+(.)?/g, (match, c) => {
        return c ? c.toUpperCase() : ''
    })
}
camelize('nann blue')
camelize('nann_blue')
camelize('nann.blue')
camelize('nann blue')
// 逆驼峰
function dasherize() {
    return str.replace(/([A-Z])/g, '-$1').replace(/[-_\s]+/g, '-').toLowerCase()
}
dasherize('MozTransform')

// Html 转移和反转义
function escapeHTML(str) {
    var escapeChars = {
        '<': 'lt',
        '>': 'gt',
        '"': 'quot',
        '&': 'amp',
        '\'': '#39',
    }
    return str.replace(new RegExp(`[${Object.keys(escapeChars).join('') }]`, 'g'), match=>`&${escapeChars[match]};`)
}
escapeHTML('<div class="mm">Bala bala</div>')

// 反转义
function unescapeHTML(str) {
    var htmlEntities = {
        nbsp: ' ',
        lt: '<',
        gt: '>',
        quot: '"',
        amp: '&',
        apos: '\''
    }
    // ([^;]) => 非 ; +
    return str.replace(/\&([^;]+);/g, (match, key) => {
        if (key in htmlEntities) {
            return htmlEntities[key]
        }
        return match
    })
}

unescapeHTML("&lt;div&gt;Bala bala&lt;/div&gt;")

// 匹配成对标签 
// <title>regular expression</title> √
// <p>go go go</p> √
// <title>go go go</p> ×
// 开标签 ==> <([^>]+)>  闭标签 ==> <\/\1> 引用前面
var regex = /<([^>]+)>[\d\D]*<\/\1>/
var str1 = '<div>bala bala</div>'
var str2 = '<title>bala bala</div>'
regex.test(str1) // true
regex.test(str2)  // false

/**
 * !!! 回溯法的原理 -- 深度优先匹配 如果存在不满足  则回到上一步继续进行匹配
 */

// 回溯法也称为试探法 从问题的 初始状态出发，搜索这种状态所能达到的所有状态，当某一个状态到了尽头时，再后退一步，再从上一个状态继续搜索
// 其本质就是深度优先搜索算法，其中回退某一步的过程，就是回溯
// 产生回溯的地方会发生在那些场景么？
// 1、有贪婪量词时 例如 b{1,3} 首先会尝试 bbb, 不能匹配时，在 bb的基础上继续进行尝试 如果还不满足 则会使用 b 进行尝试
// 如果出现了多个量词挨着时，并且相互冲突时，此时会怎么样么？ 答案是 先下手为强
var string = '12345';
var regex = /(\d{1,3})(\d{1,3})/
console.log(string.match(regex));
// => ["12345", "123", "45", index: 0, input: "12345"] 回产生回溯

// 2. 惰性量词 在 贪婪量词后面加一个问好 ? 表示尽可能少的匹配
var string = '12345';
var regex = /(\d{1,3}?)(\d{1,3})/
console.log(string.match(regex));
// => ["1234", "1", "234", index: 0, input: "12345"] 同样也会产生回溯

// 3.分支结构也是惰性的 当前面的分支没有匹配上时 后面的分支会继续尝试 所以 ***这样的尝试也是一种回溯***

/**
 * !!! 总结
 * *** 贪婪量词：买衣服砍价 => 价钱太高了，便宜点，不行，再便宜点儿
 * *** 惰性量词：卖东西加价 => 给太少了，再加点儿行不行，还是少了，再给点儿
 * *** 分支结构：货比三家 => 这家不行，换一家，还不行，再换
 * !!! SHIT
 */

// *** 拆解 分支结构 如何读懂别人写的正则表达式 （结构 & 操作符）

/** 结构
 * !!! 都有哪一些结构呢
 * !!! 字符字面量  匹配具体的字符
 * !!! 字符组 匹配一个字符 也可以多中可能之一 [0-9]
 * !!! 量词 表示一个连续出现的字符 a{1,3} a+  
 * !!! 锚 匹配位置  ^ $ \b \B
 * !!! 分组 表示一个整体 (ab)+ or ... 非捕获分组 (?:ab)+
 * !!! 分支 多个子表达式之一 abc|bcd
 * !!! 结构
 */

/** 操作符 优先级从上到下
 * !!! 操作符
 * !!! 转义符           \
 * !!! 括号和方括号     () or []
 * !!! 量词限定符       {m} {m,n} {m,} ? * +
 * !!! 位置和序列       ^ $ \元字符 一般字符
 * !!! 管道符           |
 */

// *** 要点一：匹配字符串的整体问题 
var regex1 = /^abc|bcd$/
var regex2 = /^(abc|bcd)$/
// *** 要点二：量词连缀问题
// 匹配 a b c 任意一个 且 字符长度是 3 的倍数
var regex = /^([abc]{3})+$/
// *** 要点三：元字符转义问题 元字符就是在正则表达式中有特殊意义的字符
// !!! 其中包括 ^ $ . * + ? | \ / ( ) [ ] { } = ! : -
// 1、字符组中的 元字符 和字符组相关的元字符有 [ ] ^ - 当可能引起歧义的地方都需要进行转义
// 1、字符组中的 元字符 和字符组相关的元字符有 [ ] ^ - 当可能引起歧义的地方都需要进行转义
var string = "^$.*+?|\\/[]{}=!:-,";
var regex = /[\^$.*+?|\\/\[\]\{}=!:\-,]/g
console.log(string.match(regex))
// 2、匹配 "[abc]" 和 "{3,5}"
var regex = /\[abc\]/  
var regex = /\{3,5\}/

/** 
 * !!!! 案例 匹配身份证
 */
var regex = /^\d{17}[\dxX]$/

/** 
 * !!!! 案例 匹配IPV4 => 3位数.3位数.3位数.3位数
 */
 var regex = /^((0{0,2}\d|0?\d{2}|1\d{2}|2[0-4]\d|25[0-5])\.){3}(0{0,2}\d|0?\d{2}|1\d{2}|2[0-4]\d|25[0-5])$/
 var ipv4 = '192.168.0.89'
 console.log(regex.test(ipv4))


/**
 * !!! 正则表达式的构建
 * !!! 1、平衡法则 
 *      匹配预取字符串
 *      不匹配非预取字符串
 *      可读性和可维护行
 *      效率
 * !!! 2、构建前提
 *      能不能用正则
 *      有没有必要使用正则
 *      有没有必要构建一个复杂的正则表达式 -- 拆分成小正则去做也行
 * !!! 3、准确性
 *      匹配固定电话
 *      055118888888  => /^0\d{2,3}[1-9]{6,7}$/
 *      0551-18888888 => /^0\d{2,3}-[1-9]{6,7}$/
 *      (0551)18888888 => /^\(0\d{2,3}\)[1-9]{6,7}$/
 *      合并 => /^(0\d{2,3}-?|\(0\d{2,3}\))[1-9]{6,7}$/ 
 *      匹配浮点数
 *      1.12 +1.12 -1.121   => 
 *      10 +10 -10 =>
 *      .2 +.2 -.2 =>
 *      [+-] vs \d+ vs  \.\d+
 *      ===>>>> /^[+-]?(\d+\.\d+|\d+|\.\d+)$/
 * !!! 4、效率
 *      清除回溯
 *      使用非捕获分组
 *      独立出确定字符
 *      提取分支 公共部分
 *      减少分支数量 缩小他们的范围
 */

// *** 正则表单式的操作 API

// !!! 验证 切分 提取 替换

// 验证
var regex = /\d/;
var string = 'abcd123';
console.log(!!~string.search(regex))   // 4  位置（0开始）如果没有匹配上 -1
console.log(regex.test(string))       // true 布尔值 false
console.log(!!string.match(regex))    // ["1", index: 4, input: "abcd123", groups: undefined] null
console.log(!!regex.exec(string))     // ["1", index: 4, input: "abcd1", groups: undefined] null

// 切分 split 
var string = '2021-5-31';
console.log(string.split(/\D/))
console.log('2021-5-31'.split(/\D/))

//  ** 提取 通常使用  分组引用 分组捕获
var regex = /^(\d{4})\D(\d{2})\D(\d{2})$/
var string = '2021-05-31'
console.log(string.match(regex)) // ["2021-05-31", "2021", "05", "31", index: 0, input: "2021-05-31", groups: undefined]
console.log(string.exec(regex)) // ["2021-05-31", "2021", "05", "31", index: 0, input: "2021-05-31", groups: undefined]
regex.test(string)
console.log(RegExp.$1) // 2021
console.log(RegExp.$2) // 05
console.log(RegExp.$3) // 31
string.search(regex)
console.log(RegExp.$1) // 2021
console.log(RegExp.$2) // 05
console.log(RegExp.$3) // 31
var date = []
string.replace(regex, (match, year, month, day) => {
    date.push(year, month, day)
})
console.log(date)

// ** 替换
var string = '2021-05-31'
var today = new Date(string.replace(/-/g, '/'))
console.log(today) // Mon May 31 2021 00:00:00 GMT+0800 (中国标准时间)

// !!! 操作
// String#search
// String#split
// String#match
// String#replace
// RegExp#test
// RegExp#exec

// search 与 match 参数问题 search & match 会把字符串转换为正则
var  string = '2021.05.31'
console.log(string.search('.')) // ===> 0
console.log(string.match('.')) // ['2', index: 0, input: '2021.05.31']
// !!! 也就是将传入的字符串当成了正则
console.log(string.search(/\./)) // 4
console.log(string.search("\\."))  // 4

console.log(string.match(/\./)) // [".", index: 4, input: "2021.05.31", groups: undefined]
console.log(string.match("\\."))  // [".", index: 4, input: "2021.05.31", groups: undefined]

console.log(string.replace('.', '/')) // ==> 2021/05/31

// match 返回结果的格式问题  与 修饰符 g 相关
var string = '2021.05.31'
var regex1 = /\b(\d+)\b/;
var regex2 = /\b(\d+)\b/g;
console.log(string.match(regex1))  // ["2021", "2021", index: 0, input: "2021.05.31", groups: undefined]
console.log(string.match(regex2))  // ["2021", "05", "31"]
// !!! 没有g返回的标准匹配格式   而有 g 时 返回的是所有匹配内容  当没有匹配时 不管有没有g返回的都是null

// exec 比 match 更强大
// ** 当正则没有 g 时，使用match返回的信息比较多，但是使用了 g 之后，就没有关键的index了 而这是exec就可以解决这个问题
var string = '2021.05.31'
var regex3 = /\b(\d+)\b/g
console.log(regex3.exec(string)) 
console.log(regex3.lastIndex)
console.log(regex3.exec(string))
console.log(regex3.lastIndex)
console.log(regex3.exec(string))
console.log(regex3.lastIndex)
console.log(regex3.exec(string))
console.log(regex3.lastIndex)

// !!! lastIndex 表示下一次匹配开始的位置
// ["2021", "2021", index: 0, input: "2021.05.31", groups: undefined]
// 4
// ["05", "05", index: 5, input: "2021.05.31", groups: undefined]
// 7
// ["31", "31", index: 8, input: "2021.05.31", groups: undefined]
// 10
// null
// 0

/**
 * !!! 修饰符 g 对exec与test的影响 
 * !!! 字符串的四个方法 lastIndex 都不会被修改
 * !!!  String#search  
 * !!!  String#split  
 * !!!  String#match
 * !!!  String#replace
 * !!!  BUT 对于 exec 和 test 当时全局匹配时（有g），每一次匹配完成后都会修改lastIndex
 */
var regex = /a/g
console.log(regex.test('a'), regex.lastIndex)
console.log(regex.test('aba'), regex.lastIndex)
console.log(regex.test('ababc'), regex.lastIndex)

// true 1
// true 3
// false 0

var regex = /a/
console.log(regex.test('a'), regex.lastIndex)
console.log(regex.test('aba'), regex.lastIndex)
console.log(regex.test('ababc'), regex.lastIndex)

// 每次从 0
// true 0
// true 0
// true 0

/**
 * !!! test 整体匹配时需要使用 ^ 和 $
 */

console.log(/123/.test('a123b'))   // true
console.log(/^123$/.test('a123b')) // false
console.log(/^123$/.test('123'))   // true

/**
 * !!! split 相关参数
 * 1、如果有第二个参数 表示结果数组最大长度
 */
var string = 'html,css,js'
console.log(string.split(/,/, 2)) // ["html", "css"]

/**
 * !!! split 相关参数
 * 2、使用了分组时 结果时包含分隔符
 */
 var string = 'html,css,js'
 console.log(string.split(/(,)/, 2)) // ["html", ",", "css", ",", "js"]

/**
 * !!! replace 的强大 假借替换知名进行其他操作
 */
var result = '2,3,5'
console.log(result.replace(/(\d+),(\d+),(\d+)/, '$3=$2+$1')) // 5=3+2
console.log(result.replace(/(\d+)/, '$&$&$&')) // 222,333,555

'1234 2345 3456'.replace(/(\d)\d{2}(\d)/g, (match, $1, $2, index, input) => {
    console.log(match, $1, $2, index, input)
})

// !!! 不推荐使用 new RegExp进行正则构造   因为要多写很多  \ 进行转义

// !!! 修饰符 
// ** g 全局匹配 global
// ** i 忽略字母大小写 ignoreCase
// ** m 多行匹配 只影响 ^ $ multiline
// ** source 属性 动态构建时传入new RegExp的字符串

// !!!! 不常用属性 不考虑了

var utils = {}
'Boolean|Number|String|Function|Array|Date|RegExp|Object|Error'.split('|').forEach(item=> {
    utils[`is${item}`] = obj => Object.prototype.toString.call(obj) === `[object ${item}]`
})
console.log(utils.isArray([1,2,3]))