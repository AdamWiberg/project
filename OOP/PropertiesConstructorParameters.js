// Свойства через параметры конструктора в ООП в JavaScript





// ЗАДАЧА №1


// Передайте в конструктор класса Employee
// имя и зарплату работника и запишите их в соответствующие свойства.


class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary
    }

    employeeName () {
        // Сделайте метод, который будет выводить имя работника.
        return this.name
    }


// Сделайте метод, который будет выводить зарплату работника.
    employeeSalary () {
        return this.salary 
    }


// Сделайте метод, который будет увеличивать зарплату работника на 10%.
     increase () {
        return (this.salary * 10) / 100
    }
}

let user = new Employee('Дамир', '3500');


console.log(user.employeeName(), user.employeeSalary(), user.increase())

