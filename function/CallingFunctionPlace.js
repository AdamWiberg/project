// Вызов функции на месте в JavaScript






// Задача №1


!function() {
	alert('!');
}(); // !





// Задача №2


function() {
	alert('!');
}(); // ошибка





// Задача №3



let result = function() {
	return '!';
}();
		
alert(result);





// Задача №4



let result = function() {
	return '!';
};
		
alert(result); // весь код








// Задача №5



let result = function() {
	return '!';
};
		
alert(result()); // !






// Задача №6 


let result = function() {
    return 1;
}() + function() {
    return 2;
}();
alert(result); //3






// Задача №7



let result = (function() {
	return '!';
}());

alert(result); // !






// Задача №8


let result = (function() {
	return '!';
})();

alert(result); // !








// Задача №9




let result = (function() {
	return '!';
});

alert(result); // весь код






// Задача №10





let result = (function() {
	return '!';
});

alert(result()); // !







// Задача №11



(function(num1, num2) {
	alert(num1 + num2);
})(1, 2); // 3





// Задача №12
// Допишите следующий код так, чтобы его запуск алертом выводил '!':



(function() {
	return function () {
        return function () {
            console.log('!')
        }
    }
})()()();







// Задача №13

// Допишите следующий код так, чтобы его запуск выводил сумму переданных параметрами чисел:




(function(num1) {
	return function (num2) {
        console.log(num1 + num2)
    }
})(1)(2); // 3





// Задача №14


// Допишите следующий код так, чтобы его запуск выводил сумму переданных параметрами чисел:




(function(num1) {
	return function (num2) {
        return function (num3) {
            console.log(num1 + num2 + num3)
        }
    }
})(1)(2)(3); //6







// Задача №15 



let str = 'str';

(function() {
	alert(1);
})(); // 1






//Задача №16





let str = 'str'

(function() {
	alert(1);
})(); // ошибка
