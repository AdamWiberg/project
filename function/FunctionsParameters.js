// Передача функций параметрами в JavaScript

// Задача №1

//Сделайте функцию test, параметрами принимающую 3 функции. 
//Передайте в нее первым параметром функцию, возвращающую 1, вторым - функцию, 
//возвращающую 2, третьим - функцию, возвращающую 3. 
//Выведите на экран сумму результатов функций.




test (
    function() {return 1},
    function() {return 2;},
    function() {return 3;}
)

function test (func1, func2, func3) {
    console.log(func1() + func2() + func3())
}





// Именованные функции




// Задача №2 

//Сделайте функцию test, параметрами принимающую 3 функции и возвращающую 
//сумму результатов переданных функций.




test (
    function() {
        return 1;
    },
    function () {
        return 2;
    },
    function () {
        return 3;
    }
);

function test (func1, func2, func3) {
    console.log(func1() + func2() + func3())
}





// Задача №3

// Сделайте 3 функции, объявив их как Function Declaration и дав им имена func1, 
// func2 и func3. Пусть первая функция возвращает 1, вторая - 2, а третья - 3. 
// Передайте эти функции параметром в функцию test из предыдущей задачи.


function func1 () {
    return 1
}

function func2 () {
    return 2
}

function func3 () {
    return 3
}

test (func1, func2, func3);

function test (get1, get2, get3) {
    console.log(get1() + get2() + get3())
}





// Задача №4
// Модифицируйте предыдущую задачу так, чтобы функции были объявлены как
//  Function Expression с теми же именами.




let func1 = function () {
    return 2
}

let func2 = function () {
    return 3
}

let func3 = function() {
    return 3
}

test (func1, func2, func3);

function test (get1, get2, get3) {
    console.log(get1() + get2() + get3())
}





// Параметры передаваемых функций



// Задача №5
// Скопируйте код моей функции test. Вызовите эту функцию, 
// передав ей параметром анонимную функцию, которая параметром
//  будет принимать число и возвращать его куб.



test(function(num) {
    return num * num * num
})

function test (func1) {
    console.log(func1(3))
}






// Задача №6

// Переделайте ваш код так, чтобы передаваемая функция была не анонимной, 
// а была определена как Function Declaration с именем func.




function func (num) {
    return num * num * num
}

console.log(func(2))




// Задача №7 
// Переделайте передаваемую функцию на Function Expression с тем же именем func.



let func = function(num) {
    return num * num * num
}


console.log(func(5))







// Задача №8

// Пусть передаваемая функция теперь принимает два параметра и возвращает их сумму. 
// При вызове передаваемая функции внутри test передайте в передаваемую функцию 
// число 2 и число 3. Выведите алертом результат.




let func = function (num1, num2) {
    let sum = num1 + num2
    return sum
}

test (func)

function test (func) {
    console.log(func(2, 2))
}










// Передадим и число параметром


// Задача №9
// Пусть функция test первым параметром принимает число, 
// а вторым и третьим параметрами - функции, также параметром принимающие числа.



// Пусть функция test возвращает сумму результатов переданных функций:

// Вызовите функцию test, первым параметром передав число 3, 
// вторым параметром функцию, возводящую число в квадрат, а третьим - функцию,
//  возводящую число в куб. Выведите результат работы на экран.





 function test(num, func1, func2) {
 	console.log(func1(num) + func2(num));
 }


// test(3, function (num) {
//     return num * num
// });



test(3, function(func1) {
    return func1 * func1 * func1
});

test(3, function(func2) {
    return func2 * func2 * func2
})



// Применение



// Задача 10

function test (arr, func) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = func(arr[i])
    }
    return arr;
}

let result = test([1, 2, 3],
    function (num) {
        return num * num * num;
})

console.log(result)


// Задача № 11
// Вызовите созданную вами функцию test, передав ей параметром массив с числами. 
// Сделайте так, чтобы функция вернула массив с кубами этих чисел.




// ВЫШЕ сделано!














