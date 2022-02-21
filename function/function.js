// 82 Основы работы с пользовательскими функциями в JavaScript

function func() {
    alert('Дамир');
}

func();




function sum() {
    let result = 0;
    for(let i = 0; i <= 100; i++) {
        result += i;
    }
    console.log(result);
}

sum();








function cube(num) {
   var num = Math.pow(num, 3);
   alert(num)
  
}

cube(5);



function sum(num) {
    if (num > 0) {
        alert('+++');
    } 
    if (num < 0) {
        alert ('---');
    }

    }
    sum(-5)





function func(num1, num2, num3) {
    alert(num1 + num2 + num3);
}

func(1, 2, 3);







function func(num1, num2, num3) {
    alert(num1 + num2 + num3);
}

let param1 = 1;
let param2 = 2;
let param3 = 3;

func(param1, param2, param3)











function func(num = 5) {
    alert(num * num);
}

func(2); // 4
func(3); // 9
func(); // 25



function func(num1 = 2, num2 = 0) {
    alert(num1 + num2);
}

func(2, 3); // 5
func(3); // 3
func(); // 2