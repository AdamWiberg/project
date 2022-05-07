// 86 раздел Флаги в функциях JavaScript



function isPrime(arr) {
    for (let i = 0; i < arr.length; i++) {
        let elem = arr[i]
        
        if (elem % 2 != 0) {
       //     console.log(elem)
            return false;
        }
    }
    return true;
}
 
 let arr = [2, 10, 4, 6, 8, 10, 12];

console.log(isPrime(arr));




function isPositive(num) {
    let str = String(num);
    for (let i = 0; i < str.length; i++) {
        let elem = str[i];
        if (elem % 2 == 0) {
            return false;
        }
    }
    return true;
}

let num = 135;

console.log(isPositive(num))







function isArrayHaveSameValues(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                return true;
            }
        }
    }
    return false;
}
let arr = [1, 2, 3, 4, 8, 6, 7, 8, 9, 10];

console.log(isArrayHaveSameValues(arr));