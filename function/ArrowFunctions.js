// Стрелочные функции в JavaScript


// Задача №1




// let result = every([1, 2, 3, 4, 5], function(elem) {
// 	if (elem > 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });


// Упростите коллбэк через стрелочную функцию.




let result = every([1, 2, 3, 4, 5], elem => elem > 0);









// Задача №2


// let result = every([1, 2, 3, 4, 5], function(elem, index) {
// 	if (elem * index > 10) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });





// Упростите коллбэк через стрелочную функцию.

let result = every([1, 2, 3, 4, 5], (elem, index) => elem * index > 10);











// Задача №3


 let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// let result = each(arr, function(elem, index) {
// 	if (elem * index > 10) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });







// Упростите коллбэк через стрелочную функцию.


let result = each(arr, (elem, index) => elem * index > 10);







































































