// Встроенные классы JavaScript





// ЗАДАЧА №1


// Изучите результат выполнения следующего кода:
// Оператор instanceof проверяет, принадлежит ли объект к определённому классу. 



let reg = new RegExp;

console.log(reg);
console.dir(reg); // список свойств и методов объекта.

console.log(reg instanceof RegExp);




// ----------------------------------------------------------------------------


// ЗАДАЧА №2


// Изучите результат выполнения следующего кода:




let arr = [1, 2, 3]; // массив

console.log(arr); // 1, 2, 3
console.dir(arr); // Array

console.log(arr instanceof Array); // true







// ----------------------------------------------------------------------



// ЗАДАЧА №3


// Изучите результат выполнения следующего кода:



let arr = new Array(1, 2, 3); // массив array 1, 2, 3

console.log(arr); // 1, 2, 3
console.dir(arr); // Array 1, 2, 3

console.log(arr instanceof Array); // true










// -------------------------------------------------------------------




// ЗАДАЧА №4

// Изучите результат выполнения следующего кода:

let obj = {a: 1, b: 2, c: 3};

console.log(obj); // {} 1, 2, 3
console.dir(obj); // Object

console.log(obj instanceof Object); // true
 




// -------------------------------------------------------------------------

// Изучите результат выполнения следующего кода:

let obj = new Object;

console.log(obj);
console.dir(obj);

console.log(obj instanceof Object); // true


