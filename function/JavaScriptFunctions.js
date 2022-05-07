// Правильное использование функций JavaScript

// Задача №1


// function getDigitsSum(num) {
//     let sum = 0;
//     let digits = String(num).split('');

//     for (let digit of digits) {
//         sum += Number(digit);
//     }
//     return sum;
// }

// getDigitsSum()



// let result = [];
// function getDigitsSums() {
//     for (let i = 1; i <= 2030; i++) {
//         if(getDigitsSum(i) == 13) {
//             result.push(i)
//         }
//     }
// }
// getDigitsSums()
// console.log(result) // сумма цифр которых равна 13.


//Задача №2


// function isPrime(num) {
//     for(let i = 2; i < num; i++) {
//         if(num % i == 0) {
//             return false;
//         }
//     }
//     return true;
// }

// isPrime();

// let result = []
// function primeNumbers () {
//     for (let i = 1; i <= 100; i++) {
//         if(isPrime(i)) {
//             result.push(i)
//         }
//     }
// }
// primeNumbers()
// console.log(result); // все простые числа в интервале от 1 до 100.


//Задача № 3



// function reverseNum(num) {
//     return String(num).split('').reverse().join('');
// }





// let arr = [123, 456, 789];
// let result = [];
// for(let num of arr) {
//         result.push(reverseNum(num));
// }


// console.log(result) // переворот числа выполняла отдельная функция.



// Задача № 4



// function getDigitsSum (num) {
//     let digits = String(num).split('')
//     let sum = 0;
//     for(let digit of digits) {
//         sum += Number(digit);
//     }
//     return sum;
// }

// function getDigitsSums (fromNum, toNum) {
//     if(getDigitsSum(fromNum) === getDigitsSum(toNum)) {
//         console.log('Числа совпадают')
//     }else {
//         console.log('Числа не совпадают')
//     }
// }

// getDigitsSums(236, 533) // равна ли сумма цифр первого числа сумме цифр второго числа.