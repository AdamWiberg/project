// Кастомные сеттеры в ООП в JavaScript



// ЗАДАЧА №1

// Добавьте сеттеры свойств в ваш класс Employee.

class Employee {
    #name;
    #salary;
    #age;

    setName(name) {
        this.#name = name
    }

    setSalary(salary) {
        this.#salary = salary;
    }

    setAge(age) {
        this.#age = age;
    }


    getName() {
        return this.#name;
    }

    getSalary() {
        return this.#salary;
    }

    getAge() {
        return this.#age;
    }
}

let user = new Employee;

user.setName('Иван');
user.setSalary('10 тысяч');
user.setAge('20 лет');

console.log(user.getName())
console.log(user.getSalary())
console.log(user.getAge())















