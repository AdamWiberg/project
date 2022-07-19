   // Методы классов в ООП в JavaScript


//    Задача 1
//    Сделайте в вашем классе Employee какой-нибудь тестовый метод. Вызовите его.



class Employee {
    test () {
        return 'Hello World'
    }
}

let user = new Employee;

console.log(user.test())







// ---------------------------------------------------------------------










// Параметры методов в ООП в JavaScript

// ЗАДАЧА №2
// Передайте в ваш тестовый метод имя и зарплату работника.



class User {
   show (name, salary){

   return name + ' ' + salary
}
}

let user = new User

console.log(user.show('Damir', '2000 рублей'))




