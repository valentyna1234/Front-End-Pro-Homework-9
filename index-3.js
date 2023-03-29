//Вивести таблицю множення на 7.

let multTable7 = '';

for ( let i = 1; i <= 10; i = i + 1 ) {
    multTable7 = multTable7 + 7 + " " + '*' + " " + i + ' ' +'=' + ' ' + 7 * i + '\n';
}
console.log('Task 9.3: ' + '\n' + multTable7);