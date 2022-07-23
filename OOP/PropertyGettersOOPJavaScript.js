// Геттеры свойств в ООП в JavaScript



// ЗАДАЧА №1


// В классе Employee сделайте три приватных свойства: имя, зарплату и возраст.

class Employee {
    #name;
    #salary;
    #age;


    // Передайте параметром конструктора значения этих свойств.

    constructor(name, salary, age) {
        this.#name = name;
        this.#salary = salary;
        this.#age = age;

    }

// Сделайте геттеры, выводящие значения каждого из наших свойств.

    getName () {
        return this.#name;
    }

    getSalary () {
        return this.#salary;
    }

    getAge() {
       return this.#age;
    }
    
}

let user = new Employee('Damir', '35 тысяч', '23 года');

console.log(user.getName())
console.log(user.getSalary())
console.log(user.getAge())

































