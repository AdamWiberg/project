// Перемешивание массива на JavaScript

// Задача №1

// возвращающая случайное целое число в заданном диапазоне:

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min 
		+ 1)) + min; 
}

let arr = [1, 2, 3, 4, 5, 7, 9, 15, 24, 59];
let result =[];

function shuffle (arr) {
    while(arr.length > 0) {
       
         let random = getRandomInt(0, arr.length - 1)
         // вырезает элемент из массива
          let elem = arr.splice(random, 1)[0]

// Запись в массив в разброс
          result.push(elem);
    }
    
       
return result
}


// console.log(shuffle(arr))





// Задача №2

// Сделайте функцию range принимающую параметрами 
// 2 целых числа - начало и конец диапазона, и 
// возвращающую массив, заполненный целыми числами из этого диапазона.

function range (num1, num2) {
    let array = [];
    // начало и конец диапазона
    for (let i = num1; i <= num2; i++ ) {
        array.push(i)
    }
    return array
}

// console.log(range(1, 5))

 // Задача № 3

// Сделайте функцию rangeRand, возвращающую массив, 
//заполненный случайными целыми числами из заданного диапазона.
// При этом числа не должны повторяться.
// Для решения задачи используйте комбинацию функций range и shuffle.

function rangeRand (num1, num2) {
 let re = range(num1, num2)
 return shuffle (re) 

}
 console.log(rangeRand(1, 12))









































































