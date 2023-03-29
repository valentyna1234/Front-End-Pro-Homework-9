//Знайти суму його парних дільників.

console.log('Task 9.11:');

let numNextOption = 120
let sumNext = 0;

for (let i = 1; i <= numNextOption; i++) {
    if (numNextOption % i === 0)
    if (i % 2 === 0)
    sumNext += i;
    
}
console.log(sumNext);