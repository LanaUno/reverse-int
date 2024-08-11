module.exports = function reverse (n) {
    if (n < 0) {
        let nReverse = Math.abs(n).toString().split('').reverse();
        return Number(nReverse.join(''));
    } else if (n % 10 === 0 ) {
        let nReverse = (n / 10).toString().split('').reverse();
        return Number(nReverse.join(''));
    } else {
        let nReverse = n.toString().split('').reverse();
        return Number(nReverse.join(''));
    }

}
