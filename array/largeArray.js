// 70 раздел Многомерные массивы в JavaScript


// let arr = [
//     ['a', 'b', 'c'],
//     ['d', 'e', 'f'],
//     ['g', 'h', 'i'],
//     ['j', 'k', 'l'],
// ];

// console.log(arr[3][2]);
// console.log(arr[1][1]);
// console.log(arr[2][0]);
// console.log(arr[0][0]);






// let result = [];
// let arr = [
//     [1, 2],
//     [3, 4],
//     [5, 6],
// ];

// for (let i = 0; i < arr.length; i++) {
//     let nestedArr = arr[i];
//     let sum = 0;
//     for (let j = 0; j < nestedArr.length; j++) {
//         sum += nestedArr[j];
//     }
//     result.push(sum);
// }
//  console.log(result); //двухмерные сумма массивов






// let arr = [
//     [
//         ['a', 'b'],
//         ['c', 'd'],
//     ],
//     [
//         ['e', 'f'],
//         ['g', 'h'],
//     ],
//     [
//         ['i', 'j'],
//         ['k', 'l'],
//     ],
// ];

// console.log(arr[0][0][0]); // выведет 'a'
// console.log(arr[2][1][0]); // выведет 'k'








// let result = [];
// let arr = [
// 	[
// 		[1, 2],
// 		[3, 4],
// 	],
// 	[
// 		[5, 6],
// 		[7, 8],
// 	],
// ];

// for (let i = 0; i < arr.length; i++) {
//     let nestedArr = arr[i];
//     let sum = 0;
//     for (let j = 0; j < nestedArr.length; j++) {
//         let nestedArray = nestedArr[j];
//         for (let k = 0; k < nestedArray.length; k++) {
//             sum += nestedArray[k];
//         }

//     }
//     result.push(sum);
// }

// console.log(result); // сумма элементов трехмерного массива







// let arr = [ // 1
//     [ // 2
//         1, 
//         2, 
//         3, 
//         [ // 3
//             4, 
//             5, 
//             [ // 4
//                 6, 
//                 7
//             ]
//         ]
//     ],
//     [
//         8, 
//         [
//             9, 
//             10
//         ]
//     ]
// ];

// let sum = arr[0][0] + arr[0][1] + arr[0][2] + arr[0][3][0] + arr[0][3][1] + arr[0][3][2][0] + arr[0][3][2][1] + 
// arr[1][0] + arr[1][1][0] +
//     arr[1][1][1];

// console.log(arr[0][0]) // 1
// console.log(arr[0][1]) // 2
// console.log(arr[0][2]) // 3
// console.log(arr[0][3][0]) // 4
// console.log(arr[0][3][1]) // 5
// console.log(arr[0][3][2][0]) // 6
// console.log(arr[0][3][2][1]) // 7
// console.log(arr[1][0]) // 8 
// console.log(arr[1][1][0]) // 9
// console.log(arr[1][1][1]) // 10
    









