// Случайный элемент из массива на JavaScript

// Задача №1

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function random (arr) {
    return arr[getRandomInt(1, arr.length - 1)]
}



let arr = [1, 3, 5, 7];



let sum1 = random(arr)
let sum2 = random(arr)
let sum3 = random(arr)

console.log(sum1)
console.log(sum2)
console.log(sum3)


// Используя созданную функцию, найдите сумму трех случайных элементов из массива.

// Задача №2

function add (sum1, sum2, sum3) {
    let summ = 0;
    for (let i = 0; i < arr.length; i++) {
        summ = sum1 + sum2 + sum3
    }

    return summ;
    

}

console.log(add(sum1, sum2, sum3))