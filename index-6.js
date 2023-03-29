//Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

let summ = 0;

for (let i = 1; i <= 500; i++) {
    summ += i; // те саме, що і sum = sum + i;
    if (summ % 500 === 0)
        console.log('Task 9.6: ' + i);
}