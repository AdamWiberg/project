// Область видимости переменных в функциях JavaScript

// ЗАДАЧА №1


let num = 1;
		
function func() {
	alert(num);
}

func(); // 1



// ЗАДАЧА №2


let num = 1;
		
function func() {
	alert(num);
}

num = 2;
func(); // 2




//ЗАДАЧА №3


function func() {
	alert(num);
}

let num;

num = 1;
func();

num = 2;
func(); // 1 затем 2



// -----------------------------------------------------------------------

// Локальные переменные


// ЗАДАЧА №4


function func() {
	let num = 5;
	return num;
}

alert(num); // ошибка. Ничего не выведит



// ЗАДАЧА №5

function func() {
	let num = 5;
	return num;
}

alert(func()); // 5






// Одноименные локальные и глобальные переменные



// ЗАДАЧА №6

let num = 1;

function func() {
	num = 2;
}
func();

alert(num); // Только 2



// ЗАДАЧА №7 


let num = 1;

function func() {
	let num = 2;
}
func();

alert(num); // 1






// Нюанс


// ЗАДАЧА №8

let num = 1;

function func() {
	num = 2;
}
func();

alert(num); // Вывод 2



//ЗАДАЧА №9

let num = 1;

function func() {
	num = 2;
}

alert(num); // Вывод 1



//ЗАДАЧА №10

let num = 1;

function func() {
	let num = 2;
}
func();

alert(num); // Вывод 1




//ЗАДАЧА №11 

let num = 1;

function func() {
	let num = 2;
}

alert(num); // 1
func(); 



// ЗАДАЧА №12

let num = 1;

function func() {
	num = 2;
}

alert(num); // вывод 1
func();




// ЗАДАЧА №13


let num = 1;

function func() {
	num++;
}

func(); // 1 
func(); // 2
func(); // 3
alert(num); // 4




// ЗАДАЧА №14


function func() {
	num = 2;
}

let num = 1;
alert(num); // 1
func();



// ЗАДАЧА №15


function func() {
	num = 2;
}

let num = 1;
func();
alert(num); // Вывод 2
 
