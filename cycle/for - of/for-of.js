//45 раздел Перебор массива циклом for-of в JavaScript



let arr = ['a', 'b', 'c', 'd', 'e'];

for (let elem of arr) {
    console.log(elem)
}


let result = 0;
let arr = [1, 2, 3, 4, 5];

for(let sum of arr) {
    result += sum;
}

console.log(result);


//Цикл for vs for-of


let arr = ['Jan',
'Feb',
'March',
'Apr',
'May',
'June',
'July',
'Aug',
'Sep',
'Oct',
'Nov',
'Dec'
];

for (let i = 0; i <arr.length; i++) {
    console.log(arr[i])
}


for (let elem of arr) {
    console.log(elem)
}




// ЗАДАЧА №2
let result = 0;
let month = 10;
let arr = ['Jan',
'Feb',
'March',
'Apr',
'May',
'June',
'July',
'Aug',
'Sep',
'Oct',
'Nov',
'Dec'
];

for (let i = 0; i < arr.length; i++) {
    
    if (i == month - 1) {
      document.write('<b>' + arr[i] + '</b>' + '<br>' );
    } else {
        document.write(arr[i] + '<br>');
    }
    
}


let i = 0;
for (let elem of arr) {
 //   document.write(elem + '<br>')
    if (i == month - 1) {
        document.write('<b>' + elem + '</b>' + '<br>');
    } else {
        document.write(elem + '<br>')
    }
    i++
}






