// Оператор rest в JavaScript




// Сейчас будем разбираться, для чего. Пусть у нас есть функция, принимающая два параметра:

function func(a, b) {
	console.log(a);
	console.log(b);
}




function func(a, b, ...rest) {
	console.log(a); // выведет 1
	console.log(b); // выведет 2
	console.log(rest); // выведет [3, 4, 5]
}

// Если лишних параметров не будет, то в переменную rest запишется пустой массив:

func(1, 2);

function func(a, b, ...rest) {
	console.log(a); // выведет 1
	console.log(b); // выведет 2
	console.log(rest); // выведет []
}

// Все параметры в массив
// В функции вообще может не быть параметров, но при этом в нее можно добавить rest:

function func(...rest) {
	console.log(rest);
}
// В этом случае функцию можно будет вызвать с любым количеством параметров и 
// все они будут попадать в массив rest.



























































































































































