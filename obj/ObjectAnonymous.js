// Объект с анонимными функциями в JavaScript

// Задача №1


// Сделайте объект с тремя функциями. Пусть первая возвращает через return число 1, 
//вторая - число 2, третья - число 3. 
//С помощью созданных функций выведите на экран сумму возвращаемых чисел.



let obj = {
    func1: function() {
        return 1;
    },

    func2: function () {
        return 2;
    },

    func3: function() {
        return 3;
    }
}

let summ = obj.func1() + obj.func2() + obj.func3()

console.log(summ) // сумма


// Задача №2


// Переберите созданный объект циклом и выведите результаты работы функций на экран.



for (let key in obj) {
    console.log(obj[key]())
}




// Задача №3

//Сделайте объект с тремя функциями, каждая из которых будет принимать параметром 
//массив с числами. Сделайте так, чтобы первая функция возвращала сумму элементов массива, 
//вторая функция - сумму квадратов, а третья - сумму кубов.



let arr = [1, 2, 3];

let obj = {
    func1: function(arr) {
        let sum = 0;
        for (let elem of arr) {
            elem += sum;
        }
        return sum
     },
     
     func2: function(arr) {
         let sum = 0;
         for (let elem of arr) {
            sum += elem * elem;
         }
         return sum;
     },

     func3: function(arr) {
         let sum = 0;

         for(let elem of arr) {
             sum += elem * elem * elem;
         }
         return sum;
     },
}

for (let key in obj) {
    console.log(obj[key](arr))
}














































































































