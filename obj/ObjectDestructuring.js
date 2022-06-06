// Деструктуризация объектов в JavaScript




// Задача №1

// Переделайте этот код через деструктуризацию согласно изученной теории.


// let options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };

// let color  = options.color;
// let width  = options.width;
// let height = options.height;



//ПЕРЕДЕЛАННЫЙ



let options = {
	color: 'red',
	width:  400,
	height: 500,
};


// let {color, width, height} = options;
let {color: y, width: x, height: r} = options;

console.log(y + ',' + x + ',' + r)

















// Задача №3

// Переделайте этот код через деструктуризацию согласно изученной теории.

// let options = {
// 	width:  400,
// 	height: 500,
// };

// let color;
// if (options.color !== undefined) {
// 	color = options.color;
// } else {
// 	color = 'black';
// }

// let width  = options.width;
// let height = options.height;




// ПЕРЕДЕЛАННЫЙ


let options = {
    width:  400,
    height: 500,
};
    
let {color = 'black', width, height} = options;

console.log(color + ',' + width + ',' + height)


















// Задача №4

// Переделайте этот код через деструктуризацию согласно изученной теории.


// let options = {
// 	width:  400,
// 	height: 500,
// };

// let с;
// if (options.с !== undefined) {
// 	с = options.color;
// } else {
// 	с = 'black';
// }

// let w = options.width;
// let h = options.height;






// ПЕРЕДЕЛАННЫЙ



let options = {
	width:  400,
	height: 500,
};

let {color: c = 'black', width, height} = options;

console.log(c + ',' + width + ',' + height)
















































