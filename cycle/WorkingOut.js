//69 раздел Отработка циклов JavaScript




for (let i = 1; i <= 100; i++) {
    document.write(i + '<br>');
} // вывод в столец числа от 1 до 100




for (let i = 100; i >= 1; i--) {
    document.write(i + '<br>');
} // вывод в столбец числа от 100 до 1




for (let i = 2; i <= 100; i += 2) {
    document.write(i + '<br>');
} //вывод в столбец четные числа от 2 до 100


let str = '';
let arr = [];
for (let i = 1; i <= 10; i++) {
    str = 'x';
    arr.push(str);
}
  console.log(arr); 





let arr = [];

for (let i = 1; i <= 10; i++) {
 

    arr.push(i);
}
 console.log(arr); // заполнение массива от 1 до 10




let arr = [11, 12, 13, 4, 5, 56, 7, 8, 29, 10];
let value = 0;
for (let i = 0; i < arr.length; i++) {
     value = arr[i];
    if (value > 0 && value < 10) {
        console.log(value)
    }
} // которые больше нуля и меньше 10-ти.




let arr = [2, 3, 7, 8, 10];
let isFiveExists = false;
for (let elem of arr) {
    if(elem == 5) {
       isFiveExists = true;
       break;
        
    } 
} 
if (isFiveExists == true) {
    console.log('Значение найдено');
} else {
    console.log('Значение не найдено');
}



let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = 0;

for (let i = 0; i < arr.length; i++) {
    result += arr[i];
}
 console.log(result);




let arr = [1, 3, 5, 7, 9, 10];
let result = 0;

for (let i = 0; i < arr.length; i++) {
    result += arr[i] * arr[i];
}

console.log(result);





let arr = [1, 5, 10, 15, 19];
let result = 0
for (let i = 0; i < arr.length; i++)  {
    result += arr[i];
    
}
result /= arr.length;
console.log(result);





// Задача на Факториал !
let result = 1;
for (let i = 1; i <= 5; i++) {
    result *= i;
}
console.log(result)
