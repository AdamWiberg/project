//46 раздел Перебор объекта циклом for-in в JavaScript



let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
let result = 0;
for (let key in obj) {
 result += obj[key];
 
}
console.log(result)