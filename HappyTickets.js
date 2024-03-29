// Счастливые билеты на JavaScript

// Задача №1 

function getLuckyTickets () {
   let result = [];

    for (let i = 1001; i <= 999999; i++) {
        if (isLucky(i)) {
            result.push(i)
        }
    }
    return result;
}

function isLucky (num) {
    let str = normalizeLucky(num);

    let sum1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
    let sum2 = Number(str[3]) + Number(str[4]) + Number(str[5]);

    return sum1 == sum2;
}

function normalizeLucky (num) {
    let str = String(num);

    if (str.length == 4) {
        str = '00' + str;
    }

    if (str.length == 5) {
        str = '0' + str;
    }

    return str;
}

console.log(getLuckyTickets(1001))
// console.log(isLucky(120021));
// console.log(isLucky(1001));