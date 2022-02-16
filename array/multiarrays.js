// 71 раздел Перебор многомерных массивов в JavaScript



// let arr = [
//     [1, 2, 3], 
//     [4, 5], 
//     [6]
// ];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     let value = arr[i];
    
//     for (let j = 0; j < value.length; j++) {
//         sum += value[j]
//     }
    
// }

// console.log(sum); // сумма двухмерного массива








// let sum = 0;
// let arr = [ // 0
//     [ // 1
//         [1, 2], 
//         [3, 4]
//     ], [ // 2
//         [5, 6], 
//         [7, 8]
//     ]
// ];

//     for (let i = 0; i < arr.length; i++) {
//         let nestedArr = arr[i];

//         for (let j = 0; j < nestedArr.length; j++) {
//             let value = nestedArr[j];

//             for (let k = 0; k < value.length; k++) {
//                 sum += value[k];
//             }
//         }
//     }

//     console.log(sum);









// let sum = 0;
// let arr = [
//     [1, 2, 3], 
//     [4, 5], 
//     [6]
// ];

// for (let subArr of arr) {
//     for (let elem of subArr) {
//         sum += elem
//     }
// }
// console.log(sum)










// let sum = 0;
// let arr = [
//     [
//         [1, 2], 
//         [3, 4]
//     ], [
//         [5, 6], 
//         [7, 8]
//     ]
// ]; 

// for (let subArr of arr) {
//     for(let elem of subArr) {
//         for(let nestedArr of elem) {
//             sum += nestedArr;
//         }
//     }
// }

// console.log(sum)