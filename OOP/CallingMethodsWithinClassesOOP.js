// Обращение к методам внутри классов в ООП в JavaScript



// ЗАДАЧА №1

// В объект класса Student запишите свойства name и surn.


class Student {
    show () {
       console.log(  this.name, this.surn );
    }
}


let user = new Student;
user.name = 'Damir'
 user.surn = 'Сдать'


user.show()
















// ЗАДАЧА №2

// Сделайте вспомогательный метод, который будет получать 
// первый символ строки и делать его заглавным.


class User {

    cape (str) {
        return str[0].toUpperCase() + str.slice(1);
    }
}

let user = new User; 

console.log(user.cape('damir'));









// ЗАДАЧА №3


// Сделайте метод, который вернет инициалы студента,
//  то есть первые буквы его имени и фамилии.




class User {
    initials(firstName, lastName) {
       
        return firstName[0].split('') + ' ' + lastName[0].split('.')
       
    }
}

let user = new User();

console.log(user.initials('Amir', 'Myrados'))










































































