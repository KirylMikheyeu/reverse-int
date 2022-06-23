module.exports = function reverse (n) {
    if (n > 0){
        let arr = n.toString().split('');
        return Number(arr.reverse().join(''));
    } else  {
           let arr = Math.abs(n).toString().split('');
            return Number(arr.reverse().join(''));
        }
};
