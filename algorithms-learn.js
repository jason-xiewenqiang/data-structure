/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    if (s.length === 1 || s.length % 2 !== 0) return false;
    const tempArray = [];
    const bracketArray = s.split('');
    const bracketMap = {
        '}': '{',
        ']': '[',
        ')': '('
    }
    bracketArray.forEach(bracket=> {
        if (['[', '{', '('].includes(bracket)) {
            tempArray.push(bracket)
        } else {
            if (tempArray[tempArray.length - 1] === bracketMap[bracket]) {
                tempArray.pop()
            } else {
                tempArray.push(bracket)
            }
        }
    })
    return tempArray.length === 0;
};
