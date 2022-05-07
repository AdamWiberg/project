

for(let i = 1; i <= 9; i++) {
    for(let j = 1; j <= 4; j++) {
        document.write(i)
    }
}


for(let i = 1; i <= 3; i++) {
    for(let j = 1; j <= 3; j++ ) {
        for(let k = 1; k <= 3; k++ ) {
            document.write(String(i) + String(j) + String(k) + ' ' );
        }
    }
}



let arr = [1,2,3,4];

arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[3] = 4;
arr[4] = 5;
arr[5] = 6;
arr[6] = 7;
arr[7] = 8;
arr[8] = 9;
arr[9] = 10;

console.log(arr)

arr = []
arr[0] = 'x'
arr[1] = 'x'
arr[2] = 'x'
arr[3] = 'x'
arr[4] = 'x' 
console.log(arr);








let arr = [];

for(let i = 0; i <= 100; i = i + 1) {
    arr[i] = i + 1;
}

console.log(arr);


let arr = [];

for (let i = 1, j = 0; i <= 99; i += 2, j++) {
    arr[j] = i
}

console.log(arr) //нечетные числа от 1 до 99




// 60 раздел Изменение массива в цикле JavaScript



let arr = [2, 4, 5, 7, 9];

for(let i = 0; i < arr.length; i++) {
    arr[i] **= 2;
}

console.log(arr) // числа в квадрат


let arr = [2, 4, 6, 8, 10];

for(let i = 0; i < arr.length; i++) {
    arr[i] -= 1;
}

for(let i = 0; i < arr.length; i++) {
    arr[i] += 10;
}

console.log(arr);