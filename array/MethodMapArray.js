// Метод map для перебора массива в JavaScript




// Задача №1 

// Дан массив с числами. Используя метод map извлеките из 
// каждого элемента массива квадратный корень и запишите результат в новый массив.





let arr = [1, 2, 3, 4, 5];


let result = [];

var resul = arr.map( function (num) {
 
    return num * num
    
});

result.push(resul)
console.log(result)




















// Задача №2


// Дан массив со строками. 
// Используя метод map в конец значению каждого элемента массива добавьте символ '!'.


let arr = ['123', '456', '789'];

let result = arr.map(function(str) {
    return str + '!'
})


console.log(result)












// Задача №3


// Дан массив со строками. 
// Используя метод map переверните символы каждой строки в обратном порядке.





let arr = ['123', '456', '789'];

let result = arr.map(function(str) {
    return str.split('').reverse().join('')
})

console.log(result)













// Задача №4


let arr = ['123', '456', '789'];


let result = arr.map(function(elem) {
    elem = elem.split('');
let res = elem.map(function(num) {
   return num = Number(num)
})
return res
})

console.log(result)


// Используя метод map преобразуйте этот массив в следующий:

// let arr = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9]
// ];




















// Задача №5



// Дан массив с числами. Используя метод map запишите в каждый 
// элемент массива значение этого элемента, умноженное на его порядковый номер в массиве.



let arr = [1, 2, 3, 4, 5]; // 0, 1, 2, 3, 4


let result = arr.map(function(elem, index) {
    return elem * index
})


    console.log(result)







    // Перебор многомерных массивов


    let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

    let result = arr.map(function(elem) {
        return elem.map(function(num) {
            return num * num;
        });
    });
    
    console.log(result);











































































































































































































































