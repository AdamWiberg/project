// 52 раздел, работа с флагами

let arr = ['a', 'b', 'c', 'd', 'e'];
let flag = false;
let result = 0;
for (let i = 0; i < arr.length; i++) {
  result = arr[i];
  if (result == 'c') {
      flag = true;
      break;
  }
}

if (flag === true) {
    console.log('Значение в массиве есть ' + result);

} else {
    console.log('В массиве нет этого значения');
}

// 53 раздел

let num = 31;

let flag = true;

for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        flag = false;
        break;
    }
}

console.log(flag);