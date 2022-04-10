// Поиск ошибок в коде с функциями JavaScript
// 115 раздел


// Задача 1

function func1(num1, num2) {
	return num1 + num2
}


console.log( func1(3, 5)  );



// -------------------------------------------------------------------

// задача №2

function sum(arr) {
	let res = 0;
	
	for (let i = 0; i < arr.length; i++) {
        
		res += arr[i];
	
	}
    return res;
}

console.log((sum([1, 2, 3, 4, 5])));



//  ----------------------------------------------------------------------

// Задача №3




function func(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
	return res;
	
}
let arr = [1, 2, 3, 4, 5];
console.log(func(arr))



// ---------------------------------------------------------------------

// Задача №4 


function func1() {
	return 3;
}
function func2() {
	return 5;
}

console.log( func1() + func2() );


// ----------------------------------------------------------------------

// Задача №5


function sum(arr) {
	let sum = 0;
	
	for (let elem of arr) {
		sum += elem;
	}
	
	return sum;
}
let arr = [1, 2, 3, 4, 5];

console.log(sum(arr))



// ------------------------------------------------------------------------

// Задача № 6

function sum(arr) {
	let sum = 0;
	
	for (let elem of arr) {
		sum += elem;
	}
    return sum
}


let res = sum([1, 2, 3, 4, 5]);
alert(res);


// ------------------------------------------------------------------------

// Задача № 7


function add(num) {
	if (num <= 9) {
		return '0' + num;
	} else {
        return num;
    }// Функция добавляет ноль к числу от 1 до 9, а числа больше 9 возвращает без изменений
}
let num = 10;
console.log(add(num));


// ----------------------------------------------------------------------------

// Задача № 8


function sum(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
	
	return res;
}

let arr = [1, 2, 3, 4, 5];
// let sum = sum(arr);
console.log(sum(arr));




// ----------------------------------------------------------------------------

// Задача № 9


function getDigitsSum(num) {
    var arr = String(num).split('');
    var sum = 0;
	
for (let elem of arr) {
    sum += Number(elem); // Код должен найти сумму цифр числа:
}
return sum

}
var num = 12345;


console.log(getDigitsSum(num));