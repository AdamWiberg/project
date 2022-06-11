// Деструктуризация массивов в JavaScript




// Задача №1



// Переделайте этот код через деструктуризацию согласно изученной теории.

// В следующем коде части массива записываются в соответствующие переменные:


// let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];

// let name       = arr[0];
// let surname    = arr[1];
// let department = arr[2];
// let position   = arr[3];
// let salary     = arr[4];



//Переделанный


let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];

let [Name, Surname, Department, Programmer, Num] = arr;


console.log(Name)
console.log(Surname)
console.log(Department)
console.log(Programmer)
console.log(Num)












// Задача №2

// function func() {
// 	return ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
// }

// let arr = func();

// let name       = arr[0];
// let surname    = arr[1];
// let department = arr[2];
// let position   = arr[3];
// let salary     = arr[4];

// Переделайте этот код через деструктуризацию согласно изученной теории.






// Переделанный 

// function func() {
	return ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
}

let [name, surname, department, position, salary] = func()










// Задача №3

// let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];

// let department = arr[2];
// let position   = arr[3];

// Переделайте этот код через деструктуризацию согласно изученной теории.









// Переделанный

 let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];


 let [, , , department,, position] = arr;






// Задача №4


// let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];

// let name    = arr[0];
// let surname = arr[1];

// let info = arr.slice(2); // все элементы со второго до конца 
// 	массива 




    // Переделанный



let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];

let [name, surname, ...rest] = arr
















// Задача №5


// let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист'];

// let name       = arr[0];
// let surname    = arr[1];
// let department = arr[2];

// let position;
// if (arr[3] !== undefined) {
// 	position = arr[3];
// } else {
// 	position = 'джуниор';
// }



// Переделанный



let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист'];



let [name, surname, department, position = 'джуниор'] = arr;


console.log(position)









// Задача №6

// Модифицируйте полученный выше код так, чтобы при отсутствии в массиве значения 
// для месяца по умолчанию брался текущий месяц, а при отсутствии значения 
// для года - соответственно текущий год.




let arr = [, , 31]

function getMonth () {
    return (new Date).getMonth();
}

function getYear () {
    return (new Date).getFullYear();
}

let [month = getMonth(), year = getYear(), day ] = arr

console.log(month + '.' + year + '.' + day)










































