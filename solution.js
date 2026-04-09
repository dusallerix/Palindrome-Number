/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x) {
    const map = x.toString().split('').map(Number);

    for(let i=0, j = map.length-1; i <= j; i++, j--){
        if(map[i] !== map[j]) return false;
    }
    return true;
};
