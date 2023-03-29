//Дано натуральне число. Знайти та вивести на сторінку всі його дільники.

console.log('Task 9.9:');

let num = 120

for (let i = 1; i <= num; i++) {
    if (num % i === 0)
    console.log(i);
}