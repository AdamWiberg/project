// Преимущества сеттеров и геттеров в ООП в JavaScript




// ЗАДАЧА №1


// В классе Employee в сеттере возраста
//  сделайте проверку на то, что возраст должен быть от 0 до 120.



class Employee {
    #age
    #salary

    setAge(age) {
        if (age <= 120) {
            this.#age = age
        } else {
            throw new Error('Ошибка в возрасте')
        }
    }

    setSalary(salary) {
        this.#salary = salary
    }


// В классе Employee в геттере зарплаты сделайте так, 
// чтобы при чтении зарплаты в конец ее значения добавлялся знак доллара.


    getAge() {
        return this.#age;
    }

    getSalary() {
        return this.#salary + ' $';
    }
}

let user = new Employee;

user.setAge(120)
user.setSalary('30 тысяч')

console.log(user.getAge())
console.log(user.getSalary())










































