// Область видимости и параметры функций JavaScript


// ЗАДАЧА №1

function func(localNum) {
	alert(localNum);
}

func(1); // ВЫВОД 1





// ЗАДАЧА №2


function func(localNum) {
	alert(localNum);
}

let num = 1;
func(num); // ВЫВОД 1





// ЗАДАЧА №3

function func(localNum) {
	alert(localNum);
}

let num = 1;
func(num); // 1
num = 2;




// ЗАДАЧА №4



let num = 1;

function func(localNum) {
	alert(localNum);
}

num = 2;
func(num); // ВЫВОД 2




//ЗАДАЧА №5


function func(localNum) {
	localNum = 2;
}

let num = 1;
func(num);
alert(num);  // ВЫВОД 1




//ЗАДАЧА №6


function func(localNum) {
	num = 2;
}

let num = 1;
func(num);
alert(num); // ВЫВОД 2




// ЗАДАЧА №7


function func(localNum) {
	let num = 2;
}

let num = 1;
func(num);
alert(num); //ВЫВОД 1




// ----------------------------------------------------


// Одноименные параметры


// ЗАДАЧА №8 

function func(num) {
	num = 2;
}

let num = 1;
func(num);
alert(num); // 1



//ЗАДАЧА №9


function func() {
	num = 2;
}

let num = 1;
func();
alert(num); // ВЫВОД 2




// ЗАДАЧА №10



function func() {
	let num = 2;
}

let num = 1;
func();
alert(num); //вЫВОД 1






























































































































































