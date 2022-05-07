// 64 раздел Подсчет количества элементов в массиве JavaScript



let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let result = 0;
for (let elem of arr) {
    if (elem == 3) {
        result++
    }
}
console.log(result) // подсчет кол-ва элементов в массиве










let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let result = 0;
for (let elem of arr) {
    if (elem == 3 || elem == 2) {
        result++
    }
}
console.log(result) // подсчет кол-ва элементов в массиве





let arr = ['a', 'b', 'a', 'b', 'c', 'a', 'c', 'd'];

let count = {};

for (let elem of arr) {
    if (count[elem] === undefined) {
        count[elem] = 1;
    } else {
        count[elem]++
    }
}
console.log(count)










let arr = [1, 2, 3, 4, 5];

for(var i = 0; i <= arr.length - 1; i++) {
   let value = arr[i + 1];
//    let val = arr[i - 2];
   if(value != undefined) {
       console.log(value + arr[i]);
   }
   
}





let arr = [1, 2, 3, 4, 5];

for (let i = 2; i < arr.length; i++) {
    let value = arr[i - 2];
    console.log(value);
    console.log(arr[i - 1]);
}









let arr = [1, 2, 3, 4, 5];

for (let i = 1; i < arr.length - 1; i++) {
    let value = arr[i];
    let prev = arr[i - 1];
    let next = arr[i + 1];
    let sum = value + prev + next;
    console.log(sum);
}


