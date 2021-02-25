// 有效括号
function validBracket1(s) {
    // 如果传入空或者是长度为一 直接返回 false
    if (s.length === 1) return false;
    const tempArray = [];
    const bracketArray = s.split('');
    const bracketMap = {
        '(': ')',
        ')': '(',
        '[': ']',
        ']': '[',
        '{': '}',
        '}': '{',
    };
    bracketArray.forEach(bracket => {
        if (tempArray.includes(bracketMap(bracket))) {
            const index = tempArray.indexOf(bracketMap(bracket));
            tempArray.splice(index, 1);
        } else {
            tempArray.push(bracket);
        }
    });
    return tempArray.length === 0;
}
