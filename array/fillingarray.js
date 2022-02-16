// 72 раздел Заполнение многомерных массивов JavaScript


// [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3,  4, 5]]



let arr = [];

for (let i = 0; i < 3; i++) {
    arr[i] = [];

    for (let j = 1; j <= 5; j++) {
        arr[i].push(j);
    }
}

console.log(arr);







// [['x', 'x', 'x', 'x'], ['x', 'x', 'x', 'x'], ['x', 'x', 'x', 'x']] 


let arr = [];
let str = '';
for (let i = 0; i < 3; i++) {
    arr[i] = [];

    for(let j = 1; j <= 4; j++) {
        str = 'x';
        arr[i].push(str)
    }
}

console.log(arr);






// [
// 	[
// 		[1, 2, 3, 4, 5],
// 		[1, 2, 3, 4, 5],
// 	],
// 	[
// 		[1, 2, 3, 4, 5],
// 		[1, 2, 3, 4, 5],
// 	],
// 	[
// 		[1, 2, 3, 4, 5],
// 		[1, 2, 3, 4, 5],
// 	],
// ]







let arr = [];

for (let i = 0; i < 3; i++) {
    arr[i] = []

    for (let j = 0; j < 2; j++) {
        arr[i][j] = [];

        for (let k = 1; k <= 5; k++) {
            arr[i][j].push(k);
        }
    }
}

console.log(arr);








let arr = [];

for (let i = 0; i < 3; i++) {
    arr[i] = []; // замена
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);






let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = ''; // замена []
	
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);









let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = []; // исправлено []
	
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);








let arr = [];

for (let i = 0; i < 3; i++) {
	arr[j] = []; // исправлено arr[i] =[]
	
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);




let arr = []; //исправлено let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j <= 5; j++) {
		arr[i][j] = j + 1;
	}
}


console.log(arr);






let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = []; // исрпавлено =
	
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);










let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = []; // исправлено arr[i]
	
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);












let arr = ''; // исправлено []

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j <= 5; j++) {
		arr[i][j] = j;
	}
}

console.log(arr);









let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 1; j <= 5; j++) {
		arr.push(j); // arr[i]
	}
}

console.log(arr);














let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j <= 5; j++) {
		arr[j][i] = j; // j + 1
	}
}

console.log(arr);









let arr = []; // добавили

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j <= 5; j++) {
		arr[i][j] = j + 1; // добавлили j + 1
	}
}

console.log(arr);








// [[1, 2], [3, 4], [5, 6], [7, 8]]

let arr = [];

let num = 1;

for (let i = 0; i < 4; i++) {
    arr[i] = [];
    
    for (let j = 0; j < 2; j++) {
        arr[i][j] = num;
        num++;
    }
}
console.log(arr);








// [[2, 4, 6], [8, 10, 12], [14, 16, 18], [20, 22, 24]]


let arr = [];

let num = 2;

for (let i = 0; i < 4; i++) {
    arr[i] = [];

    for (let j = 0; j < 3; j++) {
        arr[i][j] = num;
        num += 2;
    }
}
console.log(arr);









/*

[  
    [ 
        [1, 2], [3, 4] 
    ], [ 
        [5, 6], [7, 8] 
    ]  

]
*/

let arr = [];

let num = 1;

for (let i = 0; i < 2; i++) {
    arr[i] = [];

    for (let j = 0; j < 2; j++) {
        arr[i][j] = [];

        for (let k = 0; k < 2; k++) {
            arr[i][j][k] = num++;
         //   num++;
        }
    }
}
console.log(arr);









/*
[
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9]
]

*/

let arr = [];
let k = 1;
for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		//arr[i][j] = k++;
        arr[i].push(k);
		k++;
	}
}

console.log(arr);










/* 
[
    [1, 2, 3], [4, 5, 6], [7, 8, 9]
]
*/


let arr = [];
let k = 1;

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
        k++; // добавлено
	}
}

console.log(arr);











/* 
[
    [1, 2, 3], [4, 5, 6], [7, 8, 9]
]
*/




let arr = [];
let k = 1;

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
		k++; // исправлено на k++
	}
}

console.log(arr);












/* 
[
    [1, 2, 3], [4, 5, 6], [7, 8, 9]
]
*/





let arr = [];
let k = 1; // добавлено 1

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
		k++;
	}
}

console.log(arr);













/* 
[
    [1, 2, 3], [4, 5, 6], [7, 8, 9]
]
*/



let arr = [];
let k = 1; // добавлено
for (let i = 0, k = 1; i < 3; 
	i++) { 
	arr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
        k++; // добавлено
	}
}

console.log(arr)














/* 
[
    [1, 2, 3], [4, 5, 6], [7, 8, 9]
]
*/





let arr = [];

for (let i = 0, k = 1; i < 3; i++) { 
	arr[i] = [];
	
	for (let j = 0; j < 3; k++, j++) { // переставлено k++
		arr[i][j] = k;
	}
}

console.log(arr);







/* 
[
    [1, 2, 3], [4, 5, 6], [7, 8, 9]
]
*/






let arr = [];

for (let i = 0, k = 1; i < 3; 
	i++) { 
	arr[i] = [];
	
	for (let j = 0; j < 3; k++, j++) {
		arr[i][j] = k;
	}
}

console.log(arr);








/* 
[
    [1, 2, 3], [4, 5, 6], [7, 8, 9]
]
*/





let arr = [];

for (let i = 0, k = 0; i < 3;i++) {  // ставим k = 0
	arr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i][j] = ++k;
	}
}

console.log(arr);






/* 
[
    [1, 2, 3], [4, 5, 6], [7, 8, 9]
]
*/




let arr = [];
let k = 1;

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
		k++;
	}
}

console.log(arr);











/* 
[
    [1, 2, 3], [4, 5, 6], [7, 8, 9]
]
*/


let arr = [];

for (let i = 0, k = 1; i < 3; i++) { 
	arr[i] = [];
	
	for (let j = 0; j < 3; k++, j++) {
		arr[i][j] = k;
	}
}

console.log(arr);



