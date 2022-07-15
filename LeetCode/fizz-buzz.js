/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = (n) => {
    const fizzbuzzArr = [];
    
    for(let i=1; i<=n; i++){
        i%3===0 && i%15!==0 ? fizzbuzzArr.push('Fizz'):
        i%5==0 && i%15!==0 ? fizzbuzzArr.push('Buzz') :
        i%15==0 ? fizzbuzzArr.push('FizzBuzz'): fizzbuzzArr.push(''+i)
    }
    return fizzbuzzArr;
};
