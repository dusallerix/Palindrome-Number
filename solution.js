/**
 * @param {number} x
 * @return {boolean}
 */

//вариант "Два указателя"
var isPalindrome = function(x) {
    const map = x.toString().split('').map(Number);

    for(let i=0, j = map.length-1; i <= j; i++, j--){
        if(map[i] !== map[j]) return false;
    }
    return true;
};

//вариант с помощью реверс
var isPalindrome = function(x) {
    const map = x.toString().split('').map(Number);
    return map.toString() === map.toReversed().toString();
};
