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




//85 Примеры на создание функций в JavaScript


function getSum(arr) {
    let sum = 0;

    for (let elem of arr) {
        sum += elem * elem;
    }
    return sum;
}


let arr1 = [1, 2, 3, 4, 5]; // 1, 4, 9, 16, 25
let arr2 = [6, 7, 8, 9, 10];


console.log(getSum(arr1));
console.log(getSum(arr2));




function getDigitsSum(num) {
    let str = String(num);
    let result = 0;

    for (let i = 0; i < str.length; i++){
        result += Number(str[i]);
    }
    return result;
}

console.log(getDigitsSum(587)) // сумма цифр 20








function getDivisors(num) {
    let arr = [];

    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
          arr.push(i);
        } else {
            console.log('Число ' + num + ' не делится на ' + i)
        }
    } 
    return arr;
}
 console.log(getDivisors(10))
 console.log(getDivisors(20))







function reverseStr(str) {
    return str.split('').reverse().join('')
}

console.log(reverseStr('24reverse')) // перевот










function delElem(meaning, arr) {
    for(let i = 0; i < arr.length; i++) {
        if (meaning == arr[i]) {
            arr.splice(i, 1)
        }
    }
    return arr;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(delElem(3, arr)) // удаление










function array(num1, num2) {
    let arr = [];
    for (let i = num1; i <= num2; i++) {
        arr.push(i);

    }
    return arr;
}
 console.log(array(1, 16))









// Правильное использование функций JavaScript


function isPrime(num) {
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			return false;
		}
	}

	return true;
}

function searchSimpleNumbers(fromNum, toNum) {
    for ( let i = fromNum; i < toNum; i++) {
        if (isPrime(i)) {
            console.log('Найдено простое число ' + i)
        }
    }
}
searchSimpleNumbers(3, 50)







function getDigitsSum(num) {
    let sum = 0;
    let digits = String(num).split('');

    for (let digit of digits) {
        sum += Number(digit);
    }
    return sum;
} 


function getDigitsSums(fromYear, toYear, sum) {
    let digitSums = [];
    for (let i = fromYear; i < toYear; i++) {
        let digitSum = getDigitsSum(i);
        if (digitSum == sum) {
            digitSums.push(i);
        }
    }
    return digitSums;
}
 console.log(getDigitsSums(1000, 2030, 15));









function reverseNum(num) {
    return String(num).split('').reverse().join('');
}





let arr = [123, 456, 789];
let result = [];
for(let num of arr) {
        result.push(reverseNum(num));
}


console.log(result)





function getDigitsSum(num) {
    let sum = 0;
    let digits = String(num).split('');

    for (let digit of digits) {
        sum += Number(digit);
    }
    return sum;
}

function getDigitsSums(fromNum, toNum) {

    if (getDigitsSum(fromNum) === getDigitsSum(toNum)) {
        console.log('сумма совпадает');
    } else {
        console.log('не совпадает');
    }

}
getDigitsSums(234, 531)

















































































