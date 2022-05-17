// Нюансы функциональных выражений в JavaScript

// Задача № 1

test() // выведет ошибку в консоль, значит Function Expression

let test = function() {
	alert('!');
}



let test = function func() { // Expression
	alert('!'); 
}



alert(
	function func() { // не определяется
		alert('!');
	}
);




+function func() {
	alert('!');
}

func()  // ошибка