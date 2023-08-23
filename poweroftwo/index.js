function isPowerOfTwo(n){
    if(n < 2){
        return true;
    }

    while (n > 1) {
        if(n % 2 !== 0) {
            return false;
        }
        n = n / 2
    }
    return true;
}

console.log(isPowerOfTwo(2))
console.log(isPowerOfTwo(3))
console.log(isPowerOfTwo(6))
console.log(isPowerOfTwo(8))
console.log(isPowerOfTwo(10))
console.log(isPowerOfTwo(16))
//Big(o) = o(log(n))