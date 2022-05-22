// Вложенные функции в JavaScript


// Задача №1




// Сделайте функцию func, которая параметрами будет принимать два числа, 
// а возвращать сумму квадрата первого числа с кубом второго числа.




// Сделайте для этого вспомогательную функцию square, возводящую число в квадрат,
//  и вспомогательную функцию cube, возводящую число в куб.




function func (num1, num2) {
    function square(num) {
        return num * num;
    }

    function cube (num) {
       return num * num * num
    }

    return square(num1) + cube(num2)
}

console.log(func(2, 3))




























































