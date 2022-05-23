// Замыкания в JavaScript



// Счетчик

function test () {
    let num = 1;
    return function () {
        alert(num)
        num++
    }
}
let func = test()
func()
func()




// Задача 2

// Пусть функция в замыкании хранит число 10. 
// Сделайте так, чтобы каждый вызов функции уменьшал это число на 1 
// и выводил на экран уменьшенное число.




function test () {
    let num = 10;

    return function () {
        console.log(num)
        num--
    }
}


let func = test()
func()
func()
func()






// Задача №3


// Модифицируйте предыдущую задачу так, чтобы отсчет доходил до 0, 
// а затем каждый последующий вызов функции выводил на экран сообщение о
//  том, что отсчет окончен.


function test () {
    let num = 10;

    return function () {
        for(let i = num; i >= -10; i--) {
            if (i >= 0) {
                console.log(i)
            }else {
                console.log('Отсчет окончен')
            } 
            }
        }
    }



let func = test()
func()








// Задача №4



function func() {
	let num = 0;
	
	return function() {
		alert(num);
		num++;
	};
};

func()();
func()();
func()(); // 0 0 0









// Задача №5


function func() {
	let num = 0;
	
	return function() {
		alert(num);
		num++;
	};
};

let test = func;

test()();
test()();
test()();







// Задача №6



let counter = 0;
		
function test() {
	return function() {
		alert(counter);
		counter++;
	};
};

let func = test;

let func1 = func();
let func2 = func();

func1(); // 0
func2(); // 1

func1(); // 2
func2(); // 3









// Задача №7 



function test() {
	let counter = 0;
	
	return function() {
		return function() {
			alert(counter);
			counter++;
		};
	};
};

let func = test()();

let func1 = func;
let func2 = func;

func1(); // 0
func2(); // 1

func1(); // 2
func2(); // 3











// Задача №8




function test() {
	let counter = 0;
	
	return function() {
		return function() {
			alert(counter);
			counter++;
		};
	};
};

let func = test();

let func1 = func();
let func2 = func();

func1(); // 0, 1, 2, 3
func2();

func1();
func2();

































































































































































