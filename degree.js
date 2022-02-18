// 77 раздел Математические методы в JavaScript





 
//console.log(Math.pow(2, 10)) // возведит степень

// console.log(Math.sqrt(245)) // корень из числа

// let value = 0;
// let arr = [4, 2, 5, 19, 13, 0, 10];

// for (let i = 0; i < arr.length; i++) {
//     value += arr[i];

// }

// console.log(Math.sqrt(value));  




// //Math.round  округление до ближайшего целого числа
//  console.log(Math.round(Math.sqrt(379)));
 



// // Math.ceil производит округление дробного числа
// // до целого всегда в большую сторону.
// console.log(Math.ceil(Math.sqrt(379)));



// //Math.floor производит округление 
// //числа до целых всегда в меньшую сторону.

// console.log(Math.ceil(Math.sqrt(379)))




// //tofixed производит округление числа 
// //до указанного знака в дробной части.
// let num = 19.467922333931785;
// console.log(num.toFixed(2));



// // toPrecision округляет число до заданного знака.

// console.log(num.toPrecision(2)) 







// console.log(Math.floor(Math.sqrt(587)))
// console.log(Math.ceil(Math.sqrt(587)))


// Math.max возвращает максимальное 
// число из группы чисел, переданных в функцию.

// Math.min возвращает минимальное 
// число из группы чисел, переданных параметрами.


console.log(Math.max(4, -2, 5, 19, -130, 0 ,10));
console.log(Math.min(4, -2, 5, 19, -130, 0 ,10));



// Math.random возвращает случайное дробное число от 0 до 1


console.log((Math.ceil(Math.random() * 101)));


let value = 0;
let arr = [];

for(let i = 0; arr.length < 10; i++) {
    
    arr.push(Math.ceil(Math.random() * 1000))
}


console.log(arr)







// Math.abs возвращает модуль числа, то есть из 
// отрицательного числа делает положительное.

let a = 83;
let b = 20;
console.log(Math.abs(a - b));

