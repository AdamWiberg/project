

for (let i = 10; i <= 1000; i++) {
let str = String(i);
if (Number(str[0]) + Number(str[1]) == 5) {
    console.log(i)
}
} // сумма двух первых чисел равна 5


let result = 0;
for (let i = 1; i <= 30; i++) {
 result += i;
}

console.log(result);