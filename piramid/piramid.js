//67 раздел Вывод пирамидок на JavaScript



// for (let i = 1; i <= 9; i += 2) {
//     let str = '';

//     for (let j = 0; j < i; j++) {
//         str += i;
        
//     }
//     document.write(str + '<br>');
// } 

// for(let i = 10; i >= 1; i -= 2) {
//     let str = '';

//     for(let j = 0; j < i; j++) {
//         str += 'x';
//     }

//     document.write(str + '<br>');
// } //обратный циклс



for (let i = 9; i >= 1; i--) {
    let str = '';

    for (let j = 0; j < i; j++) {
        str += i;
    }
    document.write(str + '<br>'); 
}





