// break 49 раздел

let array = [1, 10, 5, 15, 6, 0, 45, 52, 56];

for (let elem in array) {
if (elem == 0) {
    console.log('Ответ ' + elem +'.' + ' Завершаем работу скрипта');
    break;
}
}



let result = 0;
let array = [1, 5, 8, 6, -2, 5, 4];

for (let elem of array) {
    if (elem < 0) {
        break;
    } else {
        result += elem;
    }
}
    console.log(result)




let arr = [1, 3, 5, 7, 9];
let result = 0;
for (let i = 0; i < arr.length; i++) {
    result = arr[i];
    if (result == 3) {
        console.log('Ответ ' + result);
    } 
}

let number = 0;
for (let i = 0; i < 100; i++) {
    number += i;
    if (number > 100) {
    console.log(number);
    break;
}
}
