// 61 раздел  Заполнение массива методом push в JavaScript


// let arr = [];

// arr.push(1);
// arr.push(2);
// arr.push(3);
// arr.push(4);
// arr.push(5);
// arr.push(6);
// arr.push(7);
// arr.push(8);
// arr.push(9);
// arr.push(10);
// arr.push(11);
// arr.push(12);
// arr.push(13);

// console.log(arr);






// let str = 'x';

// for (let i = 1; i <= 10; i++) {
//     arr.push('x');
// }

// console.log(arr);





// let arr = [-2, -5, 6, -9, 4, -3, 4, -7];
// let result = [];
// let val = 0;
// // for(let elem of arr) {
// // if (elem > 0) {
// //     result.push(elem)
// // }
// // }
// for (let i = 0; i < arr.length; i++) {
//       val = arr[i];
//     if (val > 0) {
//         result.push(val)
// }
// }
// console.log(result)


// let arr = ['a', 'b', 'c', 'd', 'e'];

// let result = [];

// for (let i = arr.length - 1; i >= 0; i--) {
//     result.push(arr[i]);
// }
// console.log(result); // переворот массива




// let arr = [];

// arr.push('a');
// arr.push('b');
// arr.push('c');

// console.log(arr);



// let arr = [];

// for (let i = 1; i <= 5; i++) {
//     arr.push(i);
// }
//  console.log(arr);




// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let result = [];
// for(let elem of arr) {
//     if(elem % 2 != 0) { // нечетные числа
//         result.push(elem);
//     }
// }
// console.log(result);


// 79 раздел Методы для массивов в JavaScript Работа с push, unshift




// push добавляет неограниченное количество элементов в 
// конец массива. При этом исходный массив изменяется, 
// а результатом возвращается новая длина массива.


// unshift добавляет неограниченное количество новых 
// элементов в начало массива. При этом исходный массив 
// изменяется, а результатом возвращается новая длина массива.



let arr = [1, 2, 3, 4, 5];

// arr.push(4, 5, 6);

// console.log(4, 5, 6)

// arr.unshift(4, 5, 6);
// console.log(arr)




// shift удаляет первый элемент из массива. 
// При этом исходный массив изменяется, а результатом 
// метода возвращается удаленный элемент.




// pop удаляет последний элемент из массива. 
// При этом исходный массив изменяется, а результатом 
// метода возвращается удаленный элемент.





// console.log(arr.shift())








// slice вырезает и возвращает указанную часть массива.





// console.log(arr.slice(0, 3))

// let result = []
//  result = arr
// console.log(result.slice(3, 5) )


// splice удаляет или добавляет элементы в массив



// arr.splice(1, 2);

// console.log(arr)

// arr.splice(3, 0, 'a', 'b', 'c')
// console.log(arr)


// arr.splice(1, 0, 'a', 'b')
// arr.splice(6, 0, 'c');
// arr.splice(8, 0, 'e');

// console.log(arr)



// arr.indexOf(3)
// console.log(arr.indexOf(3))




console.log(arr.includes(7))


















