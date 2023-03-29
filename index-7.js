//Вивести суму лише парних чисел в діапазоні від 30 до 80.

console.log('Task 9.7:')

let sum1 = 0

for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0)
    sum1 +=  i    
}
console.log(sum1);