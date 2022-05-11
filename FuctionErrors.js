// Поиск ошибок в коде с комбинациями функций JavaScript

// Задача №1


// Код должен проверить число на то, что оно является простым:



function isPrime(num) {
	for (let i = 2; i < num; i++) {
		if (num % i !== 0) {
			return true;
		} else {
			return false;
		}
	}
}

// console.log(isPrime(10)); // должен вывести true



// Задача №2

// Код должен проверить пару чисел на то, что они дружественные числа:




function isFriendly(num1, num2) {
	let sum1 = getSum(getOwnDivisors(num1));
	let sum2 = getSum(getOwnDivisors(num2));
	
	if (sum1 == num2 && sum2 == num1) {
		return true;
	} else {
		return false;
	}
}

function getOwnDivisors(num) {
	let res = [];
	
	for (let i = 0; i < num; i++) {
		if (num % i === 0) {
			res.push(i);
		}
	}
    return res;
}

function getSum(arr) {
	let sum = 0;
	
	for (let elem of arr) {
		sum += elem;
	}
	
	return sum;
}

console.log(isFriendly(220, 284)); // должен вывести true