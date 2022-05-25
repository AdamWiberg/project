// Функции-коллбэки в JavaScript




// Задача №1
// Дан массив с числами. С помощью созданной нами функции 
// each увеличьте каждый элемент в два раза.





function each(arr, callback) {
	let result = [];
	
	for (let elem of arr) {
		result.push( callback(elem) ); // вызываем функцию-коллбэк
	}
	
	return result;
}


let test = each([4, 5, 6, 7, 8, 9], function (num) {
    return num * 2
})

console.log(test)










// Задача №2 
// Дан массив со строками. С помощью созданной нами функции 
// each переверните символы каждой строки в обратном порядке.




let arr = ['damir', 'dinar', 'test']
function each(arr, callback) {
	let result = [];
	
	for (let elem of arr) {
		result.push( callback(elem) ); // вызываем функцию-коллбэк
	}
	
	return result;
}


let test = each (arr, function(str) {
    let t = '';
    for (let i = str.length - 1; i >= 0; i--) {
        t += str[i]
    }
    return t
})


console.log(test)












// Задача №3
// Дан массив со строками.
//  С помощью созданной нами функции each сделайте заглавным первый символ каждой строки.





let arr = ['test', 'damir', 'result'];


function each(arr, callback) {
	let result = [];
	
	for (let elem of arr) {
		result.push( callback(elem) ); // вызываем функцию-коллбэк
	}
	
	return result;
}


let test = each (arr, function(str) {
    let result = '';
    result = str.slice(0,1).toUpperCase() + str.slice(1)
    return result
})



console.log(test)





// Задача №4
// С помощью следующей функции возведите все элементы массива в куб:




function each(arr, callback) {
	let result = [];
	
	for (let elem of arr) {
		result.push( callback(elem) ); // вызываем функцию-коллбэк
	}
	
	return result;
}

function cube(num) {
	return num ** 3;
}


let result = each([2, 3, 4, 5], cube);
console.log(result)





































