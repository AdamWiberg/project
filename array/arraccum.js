// 68 раздел Заполнение массивов с накоплением строки в JavaScript



let arr = [];
let str = '';

for(let i = 0; i < 5; i++) {
    str += 'xx';
    arr.push(str);
}

console.log(arr); // заполнение массива 'xx'






let arr = [];

for (let i = 1; i <= 5; i++) {
    let str = '';

    for (let j = 0; j < 5; j++) {
        str += i;
    }
    arr.push(str);
} 
console.log(arr); // заполнение массива с 5 числами