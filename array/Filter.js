// Метод filter для фильтрации массива в JavaScript




// Задача №1

// Дан массив с числами. Оставьте в нем только положительные числа.

let arr = [1,2,3,4,5,6,7,8,9,10]

console.log(arr.filter(num => num % 2 == 0))








// Задача №2 

// Дан массив с числами. Оставьте в нем только отрицательные числа.


let arr = [1, -2, 3, -4, 5, 6, -7, -9, ]


console.log(arr.filter(num => num  <= 0))







// Задача №3

// Дан массив с числами. Оставьте в нем только числа, которые больше нуля, но меньше 10.





let arr = [2, 4, 6, 8, 10, 12, 14, 16]



let result = arr.filter(function(num) {
    if(num > 0 && num < 10) {
        console.log(num)
    }
})






// Задача №4


// Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.





let arr = ['12345', '456', '78911', '1234', 'tyhhjl'];


console.log(arr.filter(str => str.length >= 5))









// Задача №5



// Дан массив с числами. Оставьте в нем только те числа,
//  произведение которых на их порядковый номер меньше 30.


function number (value) {
 return value < 30
}

          //0  //1 //2 //3 //4   //5    //6

let arr = [12, 11, 10,  25, 35,  9994, 9995, 9996 ].filter(number);



console.log(arr)













// Задача №6

// Дан массив, в нем могут быть обычные элементы и подмассивы,
// например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только обычные элементы.





let arr = [1, 2, [3, 4], 9, [5, 6]];


console.log(arr.filter(num => typeof num != 'object'))










// Задача №7

// Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.



let arr = [1, -3, 2, -4, 5, -7, 8, -6, -9];

console.log(arr.filter(num => num < 0).length)






































































