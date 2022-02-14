// 62 раздел Заполнение объектов через цикл в JavaScript


// let obj = {};

// obj['пн'] = 1;
// obj['вт'] = 2;
// obj['ср'] = 3;
// obj['чт'] = 4;
// obj['пт'] = 5;
// obj['сб'] = 6;
// obj['вс'] = 7;

// console.log(obj)





// let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

// let arr2 = [1, 2, 3, 4, 5, 6, 7];

// let obj = {};


// for (let i = 0; i <= 7; i++) {
//     obj[arr1[i]] = arr2[i];
// }

// console.log(obj);





// let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

// let arr2 = [1, 2, 3, 4, 5, 6, 7];

// let obj = {};


// for (let i = 0; i <= 7; i++) {
//     obj[arr2[i]] = arr1[i];
// }

// console.log(obj);


// let obj = {'a': 12, 'b': 21, 'c': 13, 'd': 23, 'e': 17};

// let result = {};

// for (let key in obj) {
//     if (obj[key] > 10 && obj[key] < 20) {
//         result[key] = obj[key];
//     }
// }

// console.log(result)



// let obj = {1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс'};

// let result = {};

// for (let elem in obj) {
//     if (elem % 2 != 0) {
//         result[elem] = obj[elem];
//     }
// }

// console.log(result)




// let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};

// for (let elem in obj) {
//     obj[elem] **=   2
// }

// console.log(obj)




let obj = {'a': 1, 'v': 2, 'c': 3, 'd': 4}

let result = {}

for (let key in obj) {
    result[obj[key]] = key;
}

console.log(result)
