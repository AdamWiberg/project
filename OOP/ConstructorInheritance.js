// Конструктор при наследовании в ООП в JavaScript







// ЗАДАЧА 


// Пусть класс Employee наследует от класса User из данного урока.




class User {
    constructor(surname, name) {
        this.surname = surname;
        this.name = name;
    }

    setSurname(surname) {
        this.surname = surname;
    }

    setName(name) {
        this.name = name;
    }

    getSurname() {
        return this.surname;
    }

    getName() {
        return this.name;
    }

}


// Переопределите в класс Employee конструктор родителя, 
// добавив в него параметр с возрастом и зарплатой.

class Employee extends User {
    constructor(surname, name, age, salary) {
        super(surname, name);
        this.age = age;
        this.salary = salary;
    }
    
    // Сделайте геттеры для возраста и зарплаты.

    setAge(age) {
        this.age = age;
    }

    getAge () {
        return this.age;
    }

    setSalary(salary) {
        this.salary = salary;
    }

    getSalary() {
       return this.salary;
    }
}

let employee = new Employee;

employee.setSurname('Зарипов');
employee.setName('Дамир');
employee.setAge('23 года');
employee.setSalary('50 тысяч')


console.log(employee)











































































































