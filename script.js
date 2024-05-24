const fs = require('fs');

function fizzBuzz(n){
    let output = '';

    for (let i=1; i<=n; i++){
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz')
        output +='fizzbuzz\n';
    } else if (i % 3 === 0) {
        console.log('fizz')
        output += 'fizz\n';
    } else if (i % 5 === 0) {
        console.log('buzz')
        output += 'buzz\n';
    } else {
        console.log(i)
        output += i + '\n';
    }
}
fs.writeFileSync('fizzbuzz_output.txt', output);
}
fizzBuzz(15);