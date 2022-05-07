//63 раздел Практика на циклы с массивами и объектами JavaScript

'use strict'


let obj = {
    employee1: 100,
    employee2: 200,
    employee3: 300,
    employee4: 400,
    employee5: 500,
    employee6: 600,
    employee7: 700,
};

for (let elem in obj) {
   //  obj[elem] *= 1.1;
    obj[elem] += 1/10 * obj[elem];
}

console.log(obj)







let obj = {
    employee1: 100,
    employee2: 200,
    employee3: 300,
    employee4: 400,
    employee5: 500,
    employee6: 600,
    employee7: 700,
};

for (let elem in obj) {
  if(obj[elem] <= 400) {
      obj[elem] += 1/10 * obj[elem];
  }
}

console.log(obj)







let arr1 = [1, 2, 3, 4, 5];

let arr2 = [6, 7, 8, 9, 10];

let result = {};

for (let i = 0; i < arr1.length; i++) {
    result[arr1[i]] = arr2[i]
}

console.log(result)










let sumK = 0;
let sumV = 0;
let result = 0;
let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
   for(let key in obj) {
      sumK += Number(key);
      sumV += Number(obj[key])
   }
   result = sumK / sumV;
   console.log(result)







let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};

let num = [];
let result = [];

for (let elem in obj) {
  num.push(elem);
  result.push(obj[elem])
}

console.log(num + '/' + result)







let obj = {
	1: 125,
	2: 225,
	3: 128,
	4: 356,
	5: 145,
	6: 281,
	7: 452,
};

let arr = []; 

for (let key in obj) {
    if (String(obj[key])[0] == 1 || String(obj[key])[0] == 2) {
        
        arr.push(obj[key]);
    }
} 

console.log(arr)




let obj = {};
let arr = ['a', 'b', 'c', 'd', 'e'];

for (let i = 0; i < arr.length; i++) {
    obj[i + 1] = arr[i];
}

console.log(obj)







let obj = {};
let arr = ['a', 'b', 'c', 'd', 'e'];

for (let i = 0; i < arr.length; i++) {
    let value = arr[i]
    obj[value] = i + 1;
}

console.log(obj);