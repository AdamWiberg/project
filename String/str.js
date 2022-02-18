// 78 раздел Строковые методы JavaScript
// Работа с регистром символов



// toUpperCase производит 
// преобразование строки в верхний регистр


// toLowerCase 
// производит преобразование строки в нижний регистр





let string = 'js';

console.log(string.toUpperCase());


let string = 'JS';

console.log(string.toLowerCase())




// substr возвращает подстроку из строки 
// (исходная строка при этом не изменяется).


// substring возвращает подстроку из строки
//  (исходная строка при этом не изменяется).



// slice возвращает подстроку из строки
//  (исходная строка при этом не изменяется).


let string = 'я учу javascript!';

console.log(string.substring(1, 5));
console.log(string.substring(5));

console.log(string.slice(1, 5));
console.log(string.slice(5));





// indexOf осуществляет поиск подстроки 
// (указывается первым параметром) в строке.

// lastIndexOf осуществляет поиск подстроки
// (указывается первым параметром) в строке. 
// Поиск ведется с конца строки.



let str = 'abcde';

console.log(str.indexOf('c'));

let a = '.html';
if (str.indexOf(a) >= 0) {
    console.log('Есть');
} else {
    console.log('нету')
// }
let flag = false;
if (str.lastIndexOf(a) == str.length-1) {
    flag = true;
}
console.log(flag)

if (str.indexOf(a) == 0) {
    flag = true;
}
 console.log(flag)



if (str.lastIndexOf(a) == str.length) {
    flag = true;
}

 console.log(flag)







// startsWith() помогает определить, начинается ли строка
//  с символов указанных в скобках, возвращая, 
//  соответственно, true или false.





// Метод endsWith() позволяет определить, 
// заканчивается ли строка символами указанными в
//  скобках, возвращая, соответственно, true или false.



console.log(str.startsWith('http://'))
console.log(str.endsWith('.html'));




// split осуществляет разбиение строки 
// в массив по указанному разделителю.

// let str = 'html-css-javascript';
// let arr = str.split('-');

let number = '12345';
let num = '1-2-3-4-5';

let result = num.split('-');
console.log(result);




let r = number.split('');
console.log(r)




// join объединяет элементы массива в строку с указанным разделителем 
// (он будет вставлен между элементами массива).



// let arr = [1, 2, 3];
// let str = arr.join('-');

// console.log(str);



let arr = [1, 2, 3, 4, 5];
let res = arr.join('-');
console.log(res)






















































































































