// Рекурсия и многомерные структуры в JavaScript




// Задача №1



let obj = {
    a: 1, b: {
        c: 2, d: 3, e: 4 
    }, f: {
        g: 5, j: 6, k: {
            l: 7, m: {
                n: 8, o: 9
            }
        }
    }
}



function func (obj) {
    for (let elem in obj) {
        if (typeof obj[elem] != 'object') {
            console.log(obj[elem])
        }else {
            func(obj[elem])
        }
    }
}

func(obj)

// С помощью рекурсии выведите все примитивные элементы этого объекта на экран.











// Задача №2

// Дан многомерный массив произвольного уровня вложенности, например, такой:
// [1, [2, 7, 8], [3, 4, [5, [6, 7]]]]


// Напишите код, который развернет наш многомерный массив в одномерный.
//  Для приведенного выше массива это будет выглядеть вот так:




// [1, 2, 7, 8, 3, 4, 5, 6, 7]




let arr = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];

function SimpleArr (arr) {
    let result = [];

    function func (arr) {
        for(let i = 0; i < arr.length; i++) {
            if (typeof arr[i] == 'object') {
                func(arr[i])
            } else {
                result.push(arr[i])
            }
        } return result
    }
    console.log(func(arr))
}


SimpleArr(arr)










// Задача №3


// Дан многомерный объект произвольного уровня вложенности, например, такой:

// {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}

// С помощью рекурсии найдите сумму элементов этого объекта.



let obj = {
    a: 1, b: {
        c: 2, d: 3, e: 4
    }, f: {
        g: 5, j: 6, k: {
            l: 7, m: {
                n: 8, o: 9
            }
        }
    }
}

function func (obj) {
    let sum = 0

    for (let key in obj) {
        if(typeof obj[key] == 'object') {
           sum += func(obj[key])
            // console.log(obj[key])
        } else {
           sum += obj[key]
        }
    }
    return sum
}

// console.log(func(obj[key]))

console.log(func(obj))













// Задача №4
// Дан многомерный массив произвольного уровня вложенности, 
// содержащий внутри себя строки, например, такой:


// ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]]

// С помощью рекурсии слейте элементы этого массива в одну строку:

// 'abcdefgjk'






let arr = [
    'a', [
        'b', 'c', 'd'
    ], [
        'e', 'f', [
            'g', [
                'j', 'k'
            ]
        ]
    ]
]


function stry (arr) {
    let str = '';

    for (let elem of arr) {
        if (typeof elem == 'object') {
            str += stry(elem)
        } else {
            str += elem
        }
    } return str
}


console.log( stry (arr))













// Задача №5 

// Дан многомерный массив произвольного уровня вложенности, например, такой:

// [1, [2, 7, 8], [3, 4], [5, [6, 7]]]
// Возведите все элементы-числа этого массива в квадрат.






let arr = [
    1, [
        2, 7, 8
    ], [
        3, 4
    ], [
        5, [
            6, 7
        ]
    ]
];


function square (arr) {
    
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == 'object') {
             square(arr[i])
        } else {
           arr[i] = arr[i] ** 2
        }
    } return arr
}

console.log(square(arr))


































