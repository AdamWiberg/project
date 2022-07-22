// Приватные свойства в ООП в JavaScript





// ЗАДАЧА №1


// В классе Employee сделайте три приватных свойства: имя, зарплату и возраст.



class Employee {
    #name;
    #salary;
    #age;

    // Передайте параметром конструктора значения этих свойств.

    constructor (name, salary, age) {
        this.#name = name;
        this.#salary = salary;
        this.#age = age;
    }

    // Сделайте метод, который выведет данные работника.

    show () {
        return this.#name + ' ' + ' ' +  this.#salary + ' ' + ' ' + this.#age
    }
}

let user = new Employee('Damir', '35000 тысяч', '25 лет');

console.log(user.show())