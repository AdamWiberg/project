// Массивы объектов в ООП в JavaScript



// ЗАДАЧА №1


// Сделайте массив объектов класса класса Employee.

class Employee {
    #name
    #salary

    constructor(name, salary) {
        this.#name = name
        this.#salary = salary
    }

// Перебирите созданный массив циклом и выведите на экран имена и зарплаты каждого работника.

    getName () {
        return this.#name
    }

    
    
}

let arr = [
    new Employee ('Damir'),
    new Employee ('amir'),
    new Employee ('test')
];


for (let array of arr) {
    console.log(array.getName())
}




let salary = [
    new Employee('25 тысяч' ),
    new Employee('35 тысяч'),
    new Employee('20 тысяч')
];


for (let salar of salary) {
   console.log(salar.getName())
}







































































































