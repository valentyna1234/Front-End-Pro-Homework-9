//Надрукувати повну таблицю множення від 1 до 10.

console.log('Task 9.12:')

let MultTable = () => {
    for (let i = 1; i <= 10; i++) {
       console.log(`column ${i}`);
       for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`)
       }
    }
};
MultTable ();

