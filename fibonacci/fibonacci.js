// 66 Получение чисел Фибоначчи в JavaScript



let one = 0;
let two = 1;

for (let i = 1; i <= 10; i++) {
    let current = one + two;

    one = two;
    two = current;

    console.log(current);
}



//ЧИСЛО ФИБОНАЧИИ С ТРЕМЯ ЧИСЛАМИ


let one = 0;
let two = 1;
let three = 2;
// currrent = 3

for (let i = 1; i <= 10; i++) {
    let current = one + two + three;
    console.log(current);

    one = two;
    two = three;
    three = current;
}

// 0 1 2 3 6 11