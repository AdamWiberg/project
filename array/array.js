// 64 раздел Подсчет количества элементов в массиве JavaScript



// let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let result = 0;
// for (let elem of arr) {
//     if (elem == 3) {
//         result++
//     }
// }
// console.log(result) // подсчет кол-ва элементов в массиве










// let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let result = 0;
// for (let elem of arr) {
//     if (elem == 3 || elem == 2) {
//         result++
//     }
// }
// console.log(result) // подсчет кол-ва элементов в массиве





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