//Дружественные числа на JavaScript

//Задача №1  Реализуйте функцию getOwnDivisors. Потестируйте ее работу.



//Проверьте работу функции isFreindly.

function isFreindly(num1, num2) {
	let sum1 = getSum(getOwnDivisors(num1));
	let sum2 = getSum(getOwnDivisors(num2));
	
	if (sum1 == num2 && sum2 == num1) {
		return true;
	} else {
		return false;
	}
}
console.log(isFreindly(220, 284))


//Реализуйте функцию getOwnDivisors. Потестируйте ее работу.

function getOwnDivisors(num) {
	// тут будет какой-то код
    let arrDivisors = [];

    for (let i = 1; i < num; i++) {
        if(num % i == 0) {
            arrDivisors.push(i)
        }
    }
    return arrDivisors
}

console.log(getOwnDivisors(220))
console.log(getOwnDivisors(284))


// задча №2 Реализуйте функцию getSum. Потестируйте ее работу.

let arr = [1, 2, 4, 71, 142]
function getSum(arr) {
	// тут будет какой-то код
    let sum = 0;

    for (let elem of arr) {
        sum += elem
    }
    return sum;
}

console.log(getSum(arr))
