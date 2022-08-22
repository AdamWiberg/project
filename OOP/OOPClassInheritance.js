// Наследование классов в ООП в JavaScript







// ЗАДАЧА №1 



// Сделайте класс Employee, наследующий от класса User.

class User {

}

class Employee extends User {

}



// -------------------------------------------------------------
// -------------------------------------------------------------


// Наследование публичных методов в ООП в JavaScript




// ЗАДАЧА №2 

// Проверьте, что ваш класс Employee наследует методы от класса User

class User {
    setName(name) {
        this.name = name
    }

    getName() {
        return this.name
    }
}

class Employee extends User {

}

let employee = new Employee;

employee.setName('Join');

let name = employee.getName()

console.log(name)







                         // Методы потомка в ООП в JavaScript

// Класс-потомок может иметь свои методы. 
// Для примера добавим нашему студенту геттер и сеттер года обучения:



// ЗАДАЧА №3 

// В классе Employee сделайте геттер и сеттер зарплаты.


class User {
    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}


class Employee extends User {
    setSalary (salary) {
        this.salary = salary;
    }

    getSalary () {
        return this.salary
    }
}

let employee = new Employee;

employee.setName('Ivan')
employee.setSalary('4000')


// Проверьте, что в классе Employee работают как его родные методы, 
// так и унаследованные.

let name = employee.getName();
let salary = employee.getSalary();

console.log('Меня зовут ' + name + ', и моя зарплата ' + salary + ' тысячи')




















































































