// Область видимости вложенных функций в JavaScript


// Задача №1


// Определите, не запуская код, что выведется на экран:




function test() {
	let num = 1;
	
	function func() {
		alert(num);
    }
	
	func();
}

test(); // 1







// Задача №2


// Определите, не запуская код, что выведется на экран:





function test() {
	let num = 1;
	
	function func() {
		alert(num);
	}
  
}

test(); // ничего, function func не вызвана







// Задача №3



function test() {
	let num = 1;
	
	function func() {
		alert(num);
	}
	
	func();
} // ничего, function test не вызвана





// Задача №4


function test() {
	let num;
	
	function func() {
		alert(num);
	}
	
	num = 1
	func();
	
	num = 2
	func();
}

test(); // 1 и 2








// Параметры


// Задача №5

function test(num1, num2) {
	function func() {
		alert(num1 + num2);
	}
	
	func();
}

test(1, 2); // 3






// // Задача №6

function test(num1, num2) {
	function func() {
		console.log(num1 + num2);
	}
	
	num1 = 2;
	func();
}

test(1, 2); // 4





// Задача № 7


function test(num) {
	function func(localNum) {
		alert(localNum);
	}
	
	func(num);
}

test(1); // 1






// Задача №8 


function test(num) {
	function func(localNum) {
		alert(localNum);
	}
	
	func(num + 1);
}

test(1); // 2






// Задача №9



function test(num) {
	function func(localNum) {
		alert(num);
	}
	
	func(num + 1);
}

test(1); // 1





// Задача №10 


function test(num) {
	function func(localNum) {
		localNum = 2;
	}
	
	func(num);
	alert(num);
}

test(1); // 1





// Задача №11



function test(num) {
	function func(localNum) {
		localNum = 2;
	}
	
	func(num);
	alert(localNum);
}

test(1); //  ошибка





// Задача №12



function test(num) {
	function func(localNum) {
		num = 2;
	}
	
	func(num);
	alert(num);
}

test(1); // 2








// Одноименные параметры




// Задача №13


function test(num) {
	function func(num) {
		alert(num);
	}
	
	func(num);
}

test(1); // 1






// Задача №14




function test(num) {
	function func(num) {
		num = 2;
	}
	
	func(num);
	alert(num);
}

test(1); // 1








// Задача №15 



function test(num) {
	function func(num) {
		alert(num);
	}
	
	num = 2;
	func(num);
}

test(1); // 2







// Задача №16 




function test(num) {
	function func(num) {
		alert(num);
	}
	
	func(num);
	num = 2;
}

test(1); // 1


































































