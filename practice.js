// 79 Практика на использования изученных методов



let str = 'london';

let result = str.slice(0, 1).toUpperCase() + str.slice(1);

console.log(result); // London


let result = str.slice(0, str.length - 1) +
str.slice(str.length - 1).toUpperCase()
console.log(result) // londoN



let result = str.slice(0, 2).toUpperCase() + str.slice(2);

console.log(result) // LOndon

 let string = 'London';

let result = string.slice(0, 1).toLowerCase() + string.slice(1)

console.log(result) // london





let string = 'word1 word2 word3';

// Разобьем строку в массив слов:
let words = str.split(' ');

for (let i = 0; i < words.length; 
	i++) { 
	// Увеличим регистр каждого слова:
	words[i] = words[i].slice(0, 1).toUpperCase() 
		+ words[i].slice(1); 
}

// Сольем массив обратно в строку:
let result = words.join(' ');
console.log(result); // выведет 'Word1 Word2 Word3' 




let string = 'var_test_text';

let arr = string.split('_');
let result = '';

for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);

    result += arr[i]
}

console.log(result);








let string = '12345';

let result = string.split('').reverse().join('');
console.log(result)