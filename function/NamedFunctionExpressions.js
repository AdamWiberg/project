// Именованные функциональные выражения в JavaScript


// Задача №1 


let test = function func() {
	alert('!');
};

test(); // выведет '!'
func(); // выдаст ошибку




let test = function func() {
	alert('!');
	test(); // вызываем сами себя
};

test();


// Такие Function Expression с именем функции называются 
// именованными функциональными выражениями.

























































































































































































































































