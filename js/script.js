
function smallDivisor(num){
    if (num < 1) return NaN;
    if (num === 1) return num;

let i;
    for (let i = 2; i <= num; i++) {
        if (num % i === 0){
            return i;
        }
    }
}

console.log(smallDivisor(17));

