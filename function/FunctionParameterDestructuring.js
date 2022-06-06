// Деструктуризация параметров функций в JavaScript




// Задача №1


// Переделайте следующий код через деструктуризацию согласно изученной теории:

// function func(employee) {
// 	let name       = employee[0];
// 	let surname    = employee[1];
// 	let department = employee[2];
// 	let position   = employee[3];
// 	let salary     = employee[4];
// }

// func( ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000] );






//ПЕРЕДЕЛАННЫЙ


function func ([name, surname, department, position, salary]) {
    console.log(name)
    console.log(surname)
    console.log(department)
    console.log(position)
    console.log(salary)
}

func( ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000] )













// Задача №2


// Переделайте следующий код через деструктуризацию согласно изученной теории:

// function func(employee) {
// 	let name     = employee[0];
// 	let surname  = employee[1];
// 	let info     = employee[2];
// }

// func( ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000] );






//ПЕРЕДЕЛАННЫЙ


function func ([name, surname, info]) {
    console.log(name + ',' + surname + ',' + info)
}

func( ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000] );











// Задача №3

// function func(employee) {
// 	let name       = employee[0];
// 	let surname    = employee[1];
// 	let department = employee[2];
	
// 	let position;
// 	if (arr[3] !== undefined) {
// 		position = arr[3];
// 	} else {
// 		position = 'джуниор';
// 	}
// }

// func( ['Иван', 'Иванов', 'отдел разработки'] );








//ПЕРЕДЕЛАННЫЙ


function func([name, surname, department, position = 'джуниор']) {
    console.log(name + ',' + surname + ',' + department + ',' + position)
}

func( ['Иван', 'Иванов', 'отдел разработки'] );















// Задача №4


// function func(department, employee, hired) {
// 	let name     = employee[0];
// 	let surname  = employee[1];
	
// 	let year  = hired[0];
// 	let month = hired[1];
//  	let day   = hired[2];
// }


//ПЕРЕДЕЛАННЫЙ

function func1(str){
    let arr = str.split('.');
    return arr;
    }
    function func(param1, [name, surname], str ) {
    let [year, month, day] = func1(str);
    return param1 + ',' + name + ', ' + surname + ' --- ' + year 
    
    }
    console.log(func('отдел разработки', ['Иван', 'Иванов'], '2018, 12, 31' ));










    // Задача №5

    // function func(options) {
    //     let color  = options.color;
    //     let width  = options.width;
    //     let height = options.height;
    // }
    
    // func( {color: 'red', width: 400, height: 500} );




//ПЕРЕДЕЛАННЫЙ



function func({color, width, height}) {
    console.log(color + ', ' + width + ', ' + height)
}
func( {color: 'red', width: 400, height: 500} );
















// Задача №6

// function func(options) {
// 	let width  = options.width;
// 	let height = options.height;
	
// 	let color;
// 	if (options.color !== undefined) {
// 		color = options.color;
// 	} else {
// 		color = 'black';
// 	}
// }

// func( {color: 'red', width: 400, height: 500} );






// ПЕРЕДЕЛАННЫЙ

function func({width, height, color = 'black'}) {
    console.log(width + ', ' + height + ', ' + color)
}
func( {color: 'red', width: 400, height: 500} );













