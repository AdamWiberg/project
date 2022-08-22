// Переопределение методов родителя в ООП в JavaScript


// ЗАДАЧА №1 

// В классе Employee сделайте геттер и сеттер возраста.



class User {
    setAge(age) {
        this.age = age;
    }

    getAge() {
        return this.age;
    }
}


class Employee extends User {
// В классе Employee переопределите сеттер возраста и сделайте в нем проверку на
//  то, что возраст от 18 до 65 лет.

setAge(age) {
    if (age >= 18 && age <= 65) {
        this.age = age
    } else {
        throw new Error('Неверный возраст');
    }
}

}

let employee = new Employee;

employee.setAge('66')

console.log(employee)














































































































































