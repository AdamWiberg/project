// Лексическое окружение функций в JavaScript


// Задача №1 

function test() {
	let num1 = 1;
	let num2 = 2;
	
	return function() {
		return num1 + num2;
	}
}

let func = test();
alert(func()); // 3









// Задача №2 

function test() {
	let num1 = 1;
	let num2 = 2;
	
	return function() {
		return num1 + num2;
	}
}

alert(test()()); // 3





// Задача №3


function test() {
	let num1 = 1;
	
	return function() {
		return num1 + num2;
	}
}

let num2 = 2;
let func = test();
alert(func()); // 3



// Задача №4



function test() {
	let num = 1;
	
	return function() {
		return num;
	}
}

let num = 2;
let func = test();
alert(func()); // 1
































































