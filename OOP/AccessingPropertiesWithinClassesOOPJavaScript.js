// Обращение к свойствам внутри классов в ООП в JavaScript



// ЗАДАЧА №1
// В объект класса Employee запишите свойства name и salary.



class Employee {
    show () {
            console.log(this.name)
            
    }
    
}

let user = new Employee;
user.name = 'join'


user.show()






// ЗАДАЧА №2
// Сделайте метод, который выведет на экран имя работника.



class User {
    show (name, salary) {
        return name + ' ' + salary
    }
}
let user = new User;
console.log(user.show('Jon', 'Зарплата: 52430 рублей'))


































































































































































































































